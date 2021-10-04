import React, { useState } from 'react';
import {
  withStyles,
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Switch,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import classes from './NewMember.style';
import { connect, getIn } from 'formik';
import { DATE, SINGLE_SELECT, MULTI_SELECT, SWITCH, NUMBER, ATTACHMENT } from '../../../constants/customFieldTypes';
// import { getFileExtension } from '../../../utils/helpers';
import { EXTENSIONS } from '../../../constants/documents';
import { IMAGE_EXTENSIONS } from '../../../constants/extensioins';
import { getPublicFileUrl } from '../../../utils/helpers';
// import tenantService from '../../services/tenantService';
import Dropzone from 'react-dropzone';
import MaterialTypography from '../../../components/materialTypography/MaterialTypography';
import { AttachmentTrashIcon } from '../../../components/icons/Icons';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import CloseIcon from '@material-ui/icons/Close';
import FsLightbox from 'fslightbox-react';

const CustomFields = props => {
  const [isCustomFieldImageOpen, setIsCustomFieldImageOpen] = useState(false);
  const [customFieldImage, setCustomFieldImage] = useState([]);
  const [attachmentLocalError, setAttachmentLocalError] = useState({});
  const {
    fields,
    handleChange,
    handleFileChange,
    handleDeleteFile,
    confirmDeleteFunc,
    classes,
    formik: { values, errors, touched, setError },
  } = props;

  const validate = (args, id) => {
    if (args && args[0] && args[0][0] && args[0][0].errors && args[0][0].errors[0] && args[0][0].errors[0].code) {
      if (args[0][0].errors[0].code === 'file-invalid-type') {
        setAttachmentLocalError(state => {
          return { ...state, [id]: { message: 'Invalid type' } };
        });
      } else if (args[0][0].errors[0].code === 'too-many-files') {
        setAttachmentLocalError(state => {
          return { ...state, [id]: { message: 'Please choose 1 file' } };
        });
      } else {
        setAttachmentLocalError(state => {
          return { ...state, [id]: { message: 'Invalid' } };
        });
      }
    }
  };
  const validAttachmentTypes = arr => {
    let result = [];
    for (let item of arr) {
      if (item === '.xlsx') {
        result.push(' Excel');
      }
      if (item === 'image/*') {
        result.push(' Image');
      }
      if (item === 'video/*') {
        result.push(' Video');
      }
      if (item === '.doc') {
        result.push(' Doc');
      }
      if (item === '.pdf') {
        result.push(' PDF');
      }
    }
    return result.toString();
  };
  const acceptedDropFunc = (args, id) => {
    if (attachmentLocalError && attachmentLocalError[id] && attachmentLocalError[id]) {
      let newErrorObjectValue = {
        ...attachmentLocalError,
      };
      delete newErrorObjectValue[id];
      setAttachmentLocalError(newErrorObjectValue);
    }
  };

  return (
    <Box className={classes.customFieldsWrapper} mb={4}>
      {fields.map((field, index) => {
        const { type, id, name } = field;
        const fieldPath = `customFields.${index}.value`;
        const fieldValue = getIn(values, fieldPath);
        const errorText = getIn(touched, fieldPath) && getIn(errors, fieldPath);
        const parsedValue =
          type === ATTACHMENT && fieldValue && typeof fieldValue === 'string' && JSON.parse(fieldValue);

        if (type === DATE) {
          return (
            <Box key={id.toString()} mb={1}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDatePicker
                  label={name}
                  name={name}
                  format="DD/MM/YYYY"
                  value={fieldValue ? fieldValue : null}
                  onChange={date => handleChange(date, id)}
                  helperText={errorText}
                  error={!!errorText}
                  style={{ width: '100%' }}
                />
              </MuiPickersUtilsProvider>
            </Box>
          );
        } else if (type === MULTI_SELECT || type === SINGLE_SELECT) {
          return (
            <Box key={id.toString()} mb={1}>
              <InputLabel id={id.toString()}>{name}</InputLabel>
              <Select
                fullWidth
                value={fieldValue}
                onChange={e => handleChange(e.target.value, id)}
                labelId={id.toString()}
                multiple={type === MULTI_SELECT}
                helperText={errorText}
                error={!!errorText}
              >
                {field.options.map(option => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errorText}</FormHelperText>
            </Box>
          );
        } else if (type === SWITCH) {
          return (
            <Box key={id.toString()} mb={1} pl="10px">
              <FormControlLabel
                control={
                  <Switch
                    size="small"
                    checked={fieldValue}
                    name={name}
                    onChange={() => handleChange(undefined, id, true)}
                  />
                }
                label={name}
              />
              <FormHelperText>{errorText}</FormHelperText>
            </Box>
          );
        } else if (type === ATTACHMENT) {
          return (
            <>
              {!parsedValue && !fieldValue && (
                <Dropzone
                  onDropAccepted={(...args) => acceptedDropFunc(args, id)}
                  onDropRejected={(...args) => validate(args, id)}
                  onDrop={files => handleFileChange(files, id)}
                  accept={field.allowed}
                  maxFiles={1}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div className={classes.dropZoneContainer}>
                      <div
                        {...getRootProps({
                          className:
                            attachmentLocalError && attachmentLocalError[id] && attachmentLocalError[id].message
                              ? classes.dropZoneInvalid
                              : classes.dropZone,
                        })}
                      >
                        <input {...getInputProps()} />
                        <MaterialTypography
                          style={{ marginBottom: 0, fontSize: '16px', fontFamily: 'Futura' }}
                          weight={600}
                        >
                          {name}
                        </MaterialTypography>
                        {attachmentLocalError &&
                          attachmentLocalError[id] &&
                          attachmentLocalError[id].message !== 'Invalid type' && (
                            <FormHelperText style={{ margin: '16px 0' }}>
                              {attachmentLocalError[id].message}
                            </FormHelperText>
                          )}
                        {attachmentLocalError &&
                          attachmentLocalError[id] &&
                          attachmentLocalError[id].message === 'Invalid type' && (
                            <FormHelperText style={{ margin: '16px 0' }}>
                              Allowed: {validAttachmentTypes(field.allowed)}
                            </FormHelperText>
                          )}
                        {!(attachmentLocalError && attachmentLocalError[id] && attachmentLocalError[id].message) && (
                          <p style={{ marginBottom: 0, color: '#757575', fontSize: '12px', fontFamily: 'Futura' }}>
                            Drag & drop file
                          </p>
                        )}
                        {!(attachmentLocalError && attachmentLocalError[id] && attachmentLocalError[id].message) && (
                          <p style={{ margin: '8px 0', opacity: 0.5, fontSize: '12px', fontFamily: 'Futura' }}>or</p>
                        )}
                        <Box className={classes.browseButton}>BROWSE</Box>
                      </div>
                    </div>
                  )}
                </Dropzone>
              )}
              {((parsedValue && parsedValue.extension && IMAGE_EXTENSIONS.includes(parsedValue.extension)) ||
                (fieldValue && fieldValue.isImage === true)) && (
                <Box key={id}>
                  <MaterialTypography style={{ marginBottom: '16px', fontSize: '16px', width: '100%' }} weight={600}>
                    {name}
                  </MaterialTypography>
                  <Box
                    className={classes.customFieldBackgroundImage}
                    style={{
                      backgroundImage:
                        fieldValue && fieldValue.url
                          ? `url(${fieldValue.url})`
                          : `url(${getPublicFileUrl(parsedValue.id)})`,
                    }}
                  >
                    <Box
                      onClick={() => {
                        setCustomFieldImage(
                          fieldValue && fieldValue.url ? [fieldValue.url] : [getPublicFileUrl(parsedValue.id)]
                        );
                        setTimeout(() => setIsCustomFieldImageOpen(!isCustomFieldImageOpen), 500);
                      }}
                      className={classes.downloadAndZoomWrapper}
                    >
                      <Box className={classes.downloadAndZoom}>
                        <ZoomInIcon style={{ width: '26px', height: '24px', color: '#ffffff' }} />
                      </Box>
                    </Box>
                    <Box
                      onClick={() =>
                        parsedValue && parsedValue.id ? confirmDeleteFunc(id, parsedValue.id) : handleDeleteFile(id)
                      }
                      className={classes.removeImageIconWrapper}
                    >
                      <CloseIcon className={classes.removeImageIcon} />
                    </Box>
                  </Box>
                </Box>
              )}

              {((fieldValue && fieldValue.file) || (parsedValue && parsedValue.originalName)) &&
                ((parsedValue && !IMAGE_EXTENSIONS.includes(parsedValue.extension)) ||
                  (fieldValue && fieldValue.isImage === false)) && (
                  <Box key={id} className={classes.renderedAttachment}>
                    <Box
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                        width: '100%',
                      }}
                    >
                      <Box className={classes.renderedAttachmentContent}>
                        {fieldValue.url && (
                          <img
                            src={fieldValue.url}
                            style={{ height: '30px', width: '22px', objectFit: 'cover', borderRadius: '2px' }}
                            alt=""
                          />
                        )}
                        {parsedValue.extension && (
                          <img
                            src={EXTENSIONS.images[parsedValue.extension]}
                            style={{ height: '30px', width: '22px', objectFit: 'cover', borderRadius: '2px' }}
                            alt=""
                          />
                        )}
                        {fieldValue && fieldValue.file && fieldValue.file.name && (
                          <Box className={classes.attachmentNameAndSize}>
                            <MaterialTypography className={classes.attachedItemName}>
                              {fieldValue.file.name}
                            </MaterialTypography>
                            {fieldValue && fieldValue.file && fieldValue.file.size && (
                              <MaterialTypography
                                style={{ marginBottom: 0, fontSize: '12px', color: '#bdbdbd' }}
                                weight={400}
                              >
                                {Number(fieldValue.file.size / 1000) > 1000
                                  ? Number(fieldValue.file.size / 1048576).toFixed(2) + 'MB'
                                  : Number(fieldValue.file.size / 1024).toFixed(2) + 'KB'}
                              </MaterialTypography>
                            )}
                          </Box>
                        )}
                        {parsedValue && parsedValue.originalName && (
                          <Box className={classes.attachmentNameAndSize}>
                            <MaterialTypography className={classes.attachedItemName} weight={500}>
                              {parsedValue.originalName}
                            </MaterialTypography>

                            {parsedValue && parsedValue.size && (
                              <MaterialTypography
                                style={{ marginBottom: 0, fontSize: '12px', color: '#bdbdbd' }}
                                weight={400}
                              >
                                {Number(parsedValue.size / 1000) > 1000
                                  ? Number(parsedValue.size / 1048576).toFixed(2) + 'MB'
                                  : Number(parsedValue.size / 1024).toFixed(2) + 'KB'}
                              </MaterialTypography>
                            )}
                          </Box>
                        )}
                      </Box>
                      <Box
                        style={{ cursor: 'pointer', height: '18px', width: '18px' }}
                        onClick={() =>
                          parsedValue && parsedValue.id ? confirmDeleteFunc(id, parsedValue.id) : handleDeleteFile(id)
                        }
                      >
                        <AttachmentTrashIcon />
                      </Box>
                    </Box>
                  </Box>
                )}
            </>
          );
        }

        return (
          <Box key={id.toString()} mb={1}>
            <TextField
              fullWidth
              type={type === NUMBER ? type.toLowerCase() : 'text'}
              value={fieldValue}
              id={id.toString()}
              onChange={event => handleChange(event.target.value, id)}
              label={name}
              name={name}
              helperText={errorText}
              error={!!errorText}
            />
          </Box>
        );
      })}
      {Boolean(customFieldImage.length) && (
        <FsLightbox
          key={customFieldImage.length}
          toggler={isCustomFieldImageOpen}
          sources={customFieldImage}
          sourceIndex={0}
        />
      )}
    </Box>
  );
};

export default connect(withStyles(classes)(CustomFields));
