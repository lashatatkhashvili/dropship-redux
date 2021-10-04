import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import styles from './NewMember.module.scss';
import * as Icons from '@material-ui/icons';
import MainLayoutContainer from '../../../components/mainLayout/MainLayoutContainer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import classes from './NewMember.style';
import { withStyles } from '@material-ui/core/styles';
import LoaderWrapper from '../../../hoc/loaderWrapper/LoaderWrapper';
import CustomFields from './CustomFields';
import { SINGLE_SELECT } from '../../../constants/customFieldTypes';
import { Button, Container, InputAdornment, Tooltip } from '@material-ui/core';
import SendEmails from '../../ImportEmployees/sendEmails/SendEmails';
import isEmpty from 'lodash/isEmpty';
import { destructObjectByKeys, castPrimitivesToBoolean, convertErrorsArrayToObject } from '../../../utils/helpers';
import { debounce } from 'lodash';
import usersService from '../../../services/usersService';
import moment from 'moment';
import { getFileExtension } from '../../../utils/helpers';
import { EXTENSIONS } from '../../../constants/documents';
import { IMAGE_EXTENSIONS } from '../../../constants/extensioins';
import tenantService from '../../../services/tenantService';
import ConfirmationModal from '../../../components/confirmationModal/ConfirmationModal';
import { getDataFromLocalStorage } from '../../../utils/localStorage';
import { SearchIcon } from '../../../components/icons/Icons';
import isr from '../../../assets/images/israel.svg';
import us from '../../../assets/images/united-states.svg';
import InviteTenant from '../inviteTenant/inviteTenantContainer';

class NewMember extends Component {
  state = {
    sendEmailsAreVisible: false,
    attachment: [],
    isUploadingFiles: false,
    confirmDelete: null,
    localErrors: null,
    showCountryList: false,
    communityId: null,
    countryInfo: { flag: us, phoneCode: '+1', country: 'United States' },
    countries: [
      { flag: us, country: 'United States', phoneCode: '+1' },
      { flag: isr, country: 'Israel', phoneCode: '+972' },
    ],
  };

  componentDidMount() {
    const {
      getCurrentTenant,
      currentTenant,
      tenantId,
      fetchProfileCustomFieldAnswers,
      currentBuildingId,
      fetchTenantCustomFields,
      values,
    } = this.props;

    if (!values.customFields.length) {
      const currentCommunityId = getDataFromLocalStorage('currentCommunityId');
      this.setState({
        communityId: currentCommunityId,
      });
      fetchTenantCustomFields(currentCommunityId);
    }

    if ((tenantId && !currentTenant) || (currentTenant && currentTenant.id !== tenantId)) {
      getCurrentTenant(tenantId);
      fetchProfileCustomFieldAnswers(currentBuildingId, tenantId);
    }
  }

  componentWillUnmount() {
    this.props.resetCurrentTenant();
  }

  componentDidUpdate(prevProps) {
    const { errors, setFieldError, values, tenantId, fetchTenantCustomFields } = this.props;
    const currentCommunityId = getDataFromLocalStorage('currentCommunityId');

    if (currentCommunityId !== this.state.communityId) {
      fetchTenantCustomFields(currentCommunityId);
      this.setState({
        communityId: currentCommunityId,
      });
    }

    if (errors.tenantEmailError && errors.tenantEmailError !== prevProps.errors.tenantEmailError) {
      this.setState({
        sendEmailsAreVisible: false,
      });
      setFieldError('tenantEmail', errors.tenantEmailError);
    }

    if (!tenantId && values.tenantEmail && values.tenantEmail !== prevProps.values.tenantEmail) {
      this.delayedHandleCheckUserIsInCommunity(values.tenantEmail, values.buildingId);
    }
  }

  delayedHandleCheckUserIsInCommunity = debounce(
    (email, communityId) =>
      usersService
        .checkUserIsInCommunity(email, communityId)
        .then(response => {
          const { setIsUserInCommunity, setFieldTouched, setFieldValue } = this.props;
          const { isAvailable, isAvailableInBuilding, user } = response;

          if (isAvailable) {
            setFieldValue('tenantEmail', email);
            setFieldValue('userId', '');
            setFieldValue('tenantName', '');
            setFieldValue('tenantPhone', '');
            setFieldValue('tenantBirthday', null);
            setIsUserInCommunity(response);

            this.setState({
              localErrors: null,
            });

            return;
          }

          if (!isAvailableInBuilding && !isAvailable) {
            this.setState({
              localErrors: {
                tenantEmail: 'User with given email is already in this community',
              },
            });
            setFieldTouched('tenantEmail', true);
          } else {
            this.setState({
              localErrors: null,
            });
          }

          if (Boolean(user)) {
            setFieldValue('userId', user.id);
            setFieldValue('tenantName', user.name);
            setFieldValue('tenantPhone', user.phone);
            setFieldValue('tenantBirthday', moment(user.birthday));
            setFieldValue('tenantEmail', email);
          } else {
            setFieldValue('userId', '');
            setFieldValue('tenantName', '');
            setFieldValue('tenantPhone', '');
            setFieldValue('tenantBirthday', null);
            setFieldValue('tenantEmail', '');
          }

          setIsUserInCommunity(response);
        })
        .catch(error => {
          const { setErrors, setFieldTouched, setFieldValue } = this.props;
          const { response } = error;
          const mapErrosToInputNames = {
            email: 'tenantEmail',
          };
          const errors = convertErrorsArrayToObject(response.data.errors, mapErrosToInputNames);
          setErrors(errors);
          setFieldTouched('tenantEmail', true);
          this.setState({
            localErrors: null,
          });
          setFieldValue('userId', '');
          setFieldValue('tenantName', '');
          setFieldValue('tenantPhone', '');
          setFieldValue('tenantBirthday', null);
        }),
    500
  );

  handleSelectBuilding = e => {
    const { setFieldValue } = this.props;
    const value = Number(e.target.value);
    setFieldValue('buildingId', value);
  };

  handleDateChange = date => {
    const { setFieldValue } = this.props;
    setFieldValue('tenantBirthday', date);
  };

  handleFileChange = (files, id) => {
    const { values, setValues } = this.props;
    const file = files[0];

    if (!file) return;
    const extension = getFileExtension(file.name).toLowerCase();

    const url = IMAGE_EXTENSIONS.includes(extension)
      ? URL.createObjectURL(file)
      : EXTENSIONS.images[extension]
      ? EXTENSIONS.images[extension]
      : URL.createObjectURL(file);

    const isImage = IMAGE_EXTENSIONS.includes(extension);

    this.setState(prevState => ({ attachment: [...prevState.attachment, { id, file, url }] }));

    setValues({
      ...values,
      customFields: values.customFields.map(field => {
        if (id !== field.id) {
          return field;
        }
        return {
          ...field,
          value: { file, url, isImage },
        };
      }),
    });
  };

  handleDeleteFile = async (id, savedAttachmentId) => {
    const { values, setValues, tenantId } = this.props;
    if (savedAttachmentId) {
      const deletedAttachment = await tenantService.deleteCustomFieldAnswerAttachment(tenantId, id, savedAttachmentId);
    }
    this.setState(prevState => ({ attachment: prevState.attachment.filter(item => item.id !== id) }));
    setValues({
      ...values,
      customFields: values.customFields.map(field => {
        if (id !== field.id) {
          return field;
        }
        return {
          ...field,
          value: null,
        };
      }),
    });
  };

  handleCustomFieldChange = (value, id, isSwitch = false) => {
    const { values, setValues } = this.props;
    setValues({
      ...values,
      customFields: values.customFields.map(field => {
        if (id !== field.id) {
          return field;
        }
        let currValue = isSwitch ? !field.value : value;
        if (field.type === SINGLE_SELECT) {
          currValue = [value];
        }
        return {
          ...field,
          value: currValue,
        };
      }),
    });
  };

  uploadAttachmentsFunc = async (fieldId, file) => {
    const { values, setValues, currentBuildingId } = this.props;
    let objKeyName = 'attachment_' + fieldId;
    let res = await tenantService.uploadCustomFieldAnswerAttachment(currentBuildingId, {
      fieldId: Number(fieldId),
      [objKeyName]: file,
    });
    let resJson = JSON.stringify(res);
    setValues({
      ...values,
      customFields: values.customFields.map(field => {
        if (fieldId !== field.id) {
          return field;
        }
        return {
          ...field,
          value: resJson,
        };
      }),
    });
    return resJson;
  };
  uploadFileAndSubmit = async () => {
    const { values, setValues, handleSubmit } = this.props;
    this.setState({ isUploadingFiles: true });
    // let res = []
    for (let item of this.state.attachment) {
      const response = await this.uploadAttachmentsFunc(item.id, item.file);
    }

    this.setState({ isUploadingFiles: false });
    this.handleChangeActiveStep();
  };

  confirmDeleteFunc = (id, savedAttachmentId) => {
    this.setState({ confirmDelete: { id, savedAttachmentId } });
  };

  // handleFormSubmit = () => {
  //   this.setState({
  //     sendEmailsAreVisible : true
  //   })
  // }

  handleClickShowCountryList = () => {
    this.setState({ showCountryList: !this.state.showCountryList });
  };

  handleClickHideCountryList = () => {
    this.state.showCountryList && this.setState({ showCountryList: !this.state.showCountryList });
  };

  handleClickOnPhoneSelect = o => {
    this.setState({ countryInfo: o });
  };

  handleSubmitForm = () => {
    const { handleSubmit, setFieldValue, values } = this.props;
    setFieldValue('tenantPhone', this.state.countryInfo.phoneCode + values.tenantPhone);
    handleSubmit();
  };

  handleConfirmForm = () => {
    const { setFieldValue, handleSubmit, values } = this.props;
    setFieldValue('tenantPhone', this.state.countryInfo.phoneCode + values.tenantPhone);
    setFieldValue('sendEmails', true);
    handleSubmit();
  };

  handleCloseInvite = () => {
    const { setFieldValue, history } = this.props;
    setFieldValue('sendEmails', false);
    history.push('/members');
  };

  handleChangeActiveStep = stepToBeActive => {
    const { validateForm, setErrors, setTouched, tenantId } = this.props;

    const mapStepsToValues = {
      0: ['tenantName', 'tenantEmail', 'tenantPhone', 'tenantBirthday', 'buildingId', 'customFields'],
    };

    validateForm().then(validationErrors => {
      let errorFound = false;
      // setErrors(null);
      if (!isEmpty(validationErrors)) {
        for (const stepKey in mapStepsToValues) {
          if (String(stepToBeActive) === stepKey) break;
          // get validation error keys
          const errorKeys = Object.keys(validationErrors);
          // get current step field names
          const stepValues = mapStepsToValues[stepKey];
          // check if one element of errorKeys contains in stepValues
          const errorInCurrentStep = errorKeys.filter(errorKey => stepValues.includes(errorKey)).length;
          // if errors exist in current step
          if (errorInCurrentStep) {
            const onlyCurrentStepErrors = destructObjectByKeys(validationErrors, stepValues);
            const onlyCurrentStepTouched = castPrimitivesToBoolean(onlyCurrentStepErrors);
            setErrors(onlyCurrentStepErrors);
            setTouched(onlyCurrentStepTouched);
            errorFound = true;
            this.setState({ activeStep: Number(stepKey) });
            break;
          }
        }
      }

      if (!errorFound && !tenantId) {
        this.setState({
          sendEmailsAreVisible: true,
        });
      }
      if (!errorFound && tenantId) {
        this.handleSubmitForm();
      }
    });
  };

  render() {
    const {
      t,
      values,
      touched,
      errors,
      handleChange,
      isFetchingCurrentTenant,
      isCreatingTenant,
      isUpdatingTenant,
      isChangingTenantStatus,
      setFieldValue,
      onClose,
      isOpen,
      tenantId,
      classes,
      buildings,
      isUserAvailableInCommunity,
    } = this.props;
    const { sendEmailsAreVisible, attachment, confirmDelete, localErrors, isUploadingFiles } = this.state;

    const isLoading =
      isFetchingCurrentTenant || isCreatingTenant || isUpdatingTenant || isChangingTenantStatus || isUploadingFiles;

    return (
      <MainLayoutContainer>
        <Container
          disableGutters
          className={classes.membersContainer}
          onClick={this.handleClickHideCountryList}
          style={{ padding: sendEmailsAreVisible && '50px 200px' }}
        >
          {!sendEmailsAreVisible && (
            <Box className={classes.header}>
              <Typography className={classes.title}>Create member</Typography>
              <Box className={classes.buttonsContainer}>
                <Button className={classes.mainButton} onClick={() => this.props.history.push('/members')}>
                  {t('Discard')}
                </Button>
                <Button
                  className={!values.tenantEmail ? classes.mainButton : classes.mainButtonGreen}
                  disabled={!values.tenantEmail}
                  onClick={this.state.attachment.length > 0 ? this.uploadFileAndSubmit : this.handleChangeActiveStep}
                >
                  {tenantId ? t('Update member') : t('Save')}
                </Button>
              </Box>
            </Box>
          )}
          {sendEmailsAreVisible ? (
            <LoaderWrapper isLoading={isLoading} style={{ height: '500px' }}>
              <SendEmails onReject={this.handleSubmitForm} onConfirm={this.handleConfirmForm} />
            </LoaderWrapper>
          ) : (
            <div className={classes.content}>
              <Box>
                <Typography className={classes.contentTitle}>{t('Basic Information')}</Typography>
                <div style={{ width: 480 }}>
                  <LoaderWrapper isLoading={isLoading} style={{ height: '410px' }}>
                    <Box container spacing={4}>
                      <Grid item xs={6}>
                        <TextField
                          className={classes.textField}
                          variant="outlined"
                          fullWidth
                          id="tenantName"
                          name="tenantName"
                          label={t('Name')}
                          error={Boolean(touched.tenantName && errors.tenantName)}
                          helperText={touched.tenantName && errors.tenantName}
                          value={values.tenantName}
                          onChange={handleChange}
                        />

                        <TextField
                          className={classes.textField}
                          variant="outlined"
                          fullWidth
                          id="tenantEmail"
                          name="tenantEmail"
                          label={t('Email Address')}
                          error={Boolean(
                            (this.state.localErrors && this.state.localErrors.tenantEmail) ||
                              (touched.tenantEmail && errors.tenantEmail)
                          )}
                          helperText={
                            (this.state.localErrors && this.state.localErrors.tenantEmail) ||
                            (touched.tenantEmail && errors.tenantEmail)
                          }
                          value={values.tenantEmail}
                          onChange={handleChange}
                          disabled={Boolean(tenantId)}
                        />

                        <Box className={classes.phoneNumContainer}>
                          <TextField
                            name="tenantPhone"
                            value={values.tenantPhone}
                            onChange={handleChange}
                            className={classes.textFieldPhone}
                            error={Boolean(touched.tenantPhone && errors.tenantPhone)}
                            helperText={touched.tenantPhone && errors.tenantPhone}
                            variant="outlined"
                            label={t('Phone number')}
                            placeholder="000 000 000 0000"
                            InputProps={{
                              autoComplete: 'new-password',
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Box component="li" className={classes.countriesContainerItemInput}>
                                    <img width="24" height="24" src={this.state.countryInfo.flag} alt="" />
                                    <Typography className={classes.countryText}>
                                      {this.state.countryInfo.phoneCode}
                                    </Typography>
                                  </Box>
                                </InputAdornment>
                              ),
                            }}
                            onClick={this.handleClickShowCountryList}
                          />
                          {this.state.showCountryList && (
                            <Box className={classes.selectBox}>
                              <TextField
                                onClick={e => e.stopPropagation()}
                                className={classes.selectSearch}
                                variant="outlined"
                                placeholder={t('Search country code...')}
                                InputProps={{
                                  autoComplete: 'new-password',
                                  startAdornment: (
                                    <InputAdornment position="start" className={classes.searchIcon}>
                                      <SearchIcon />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                              <Box className={classes.countriesContainer}>
                                {this.state.countries &&
                                  this.state.countries.map((item, i) => (
                                    <Box
                                      component="li"
                                      className={classes.countriesContainerItem}
                                      style={{
                                        backgroundColor:
                                          item.phoneCode === this.state.countryInfo.phoneCode && '#EEF8F2',
                                        borderRadius: '2px',
                                      }}
                                      key={i}
                                      onClick={() => this.handleClickOnPhoneSelect(item)}
                                    >
                                      <Box display="flex" className={classes.countriesContainerGap}>
                                        <img
                                          loading="lazy"
                                          width="24"
                                          height="24"
                                          src={item.flag}
                                          alt=""
                                          style={{ marginRight: '10px' }}
                                        />
                                        <Typography className={classes.countryText}>
                                          {t(`${item.country}`)} ({item.phoneCode})
                                        </Typography>
                                      </Box>
                                      {item.phoneCode === this.state.countryInfo.phoneCode && (
                                        <Icons.CheckCircle className={classes.checkCircleStyles} />
                                      )}
                                    </Box>
                                  ))}
                              </Box>
                            </Box>
                          )}
                        </Box>

                        <MuiPickersUtilsProvider utils={MomentUtils}>
                          <Box mb={4}>
                            <KeyboardDatePicker
                              className={classes.textField}
                              inputVariant="outlined"
                              fullWidth
                              disableFuture
                              label={t('Birth date')}
                              format="MM/DD/YYYY"
                              placeholder="MM/DD/YYYY"
                              value={values.tenantBirthday}
                              onChange={this.handleDateChange}
                              error={Boolean(touched.tenantBirthday && errors.tenantBirthday)}
                              style={{ width: '100%' }}
                              keyboardIcon={null}
                            />
                          </Box>
                        </MuiPickersUtilsProvider>
                      </Grid>

                      <Grid container item direction="column" justify="space-between">
                        <Typography className={classes.contentTitle}>Answer questionnaire (Optional)</Typography>
                        <CustomFields
                          fields={values.customFields}
                          handleChange={this.handleCustomFieldChange}
                          handleFileChange={this.handleFileChange}
                          handleDeleteFile={this.handleDeleteFile}
                          confirmDeleteFunc={this.confirmDeleteFunc}
                        />
                      </Grid>
                    </Box>

                    <div className={styles.newTenantRow}></div>
                  </LoaderWrapper>
                </div>
              </Box>
            </div>
          )}
        </Container>
        <ConfirmationModal
          title={t('Are you sure you want to delete this attachment?')}
          primaryButtonText={t('Delete')}
          isOpen={confirmDelete && confirmDelete.id}
          onRequestClose={() => this.setState({ confirmDelete: null })}
          onConfirm={() => {
            this.handleDeleteFile(confirmDelete.id, confirmDelete.savedAttachmentId);
            this.setState({ confirmDelete: null });
          }}
        >
          {t('Deleting an attachment can not be undone!')}
        </ConfirmationModal>
        {values.sendEmails && (
          <InviteTenant
            importedEmails={[values.tenantEmail]}
            importedUsersEmail={values.sendEmails}
            onClose={this.handleCloseInvite}
            isOpen={true}
            newMember
            setFieldValue={setFieldValue}
          />
        )}
      </MainLayoutContainer>
    );
  }
}

export default withTranslation('translations')(withStyles(classes)(NewMember));
