import NewMember from './NewMember';
import { withFormik } from 'formik';
import { employeeSchema } from '../../../validation/usersSchemas';
import { TENANT } from '../../../constants/roles';
import { convertErrorsArrayToObject } from '../../../utils/helpers';
import moment from 'moment';
import { MULTI_SELECT, SINGLE_SELECT } from '../../../constants/customFieldTypes';
import { useHistory } from 'react-router-dom';

export default withFormik({
  enableReinitialize: true,

  mapPropsToValues: props => {
    const { currentTenant, customFields, answers, currentBuildingId } = props;

    let values = {
      tenantId: '',
      tenantName: '',
      tenantEmail: '',
      tenantPhone: '',
      tenantBirthday: null,
      buildingId: currentBuildingId,
      customFields: customFields.map(field => {
        const { type } = field;
        let value = '';
        if (type === MULTI_SELECT) {
          value = [];
        }
        return {
          ...field,
          value,
        };
      }),
      sendEmails: false,

      userId: '',
    };

    if (currentTenant) {
      const { id, name, email, phone, buildingIds, isActive, birthday } = currentTenant;

      values = {
        ...values,
        tenantId: id,
        tenantName: name,
        tenantEmail: email,
        tenantPhone: phone,
        tenantBirthday: moment(birthday),
        isActive: isActive,
        // buildingId: buildingIds[0],
        buildingId: currentBuildingId,
        customFields: customFields.map(field => {
          const { type } = field;
          const item = answers.find(ans => ans.answer.customFieldId === field.id);
          let value = '';
          if (type === MULTI_SELECT) {
            value = [];
          }
          if (item) {
            const { value: answerValue } = item.answer;
            value = item.type === SINGLE_SELECT ? answerValue[0].id : answerValue;
            if (item.type === MULTI_SELECT) {
              value = value.map(val => val.id);
            }
          }
          return {
            ...field,
            value,
          };
        }),
      };
    }

    return values;
  },

  validationSchema: employeeSchema,

  handleSubmit: (values, { props, setErrors }) => {
    const { tenantId, tenantName, tenantEmail, tenantPhone, tenantBirthday, buildingId, customFields, userId } = values;

    const {
      addNewTenant,
      updateTenant,
      fetchProfileCustomFieldAnswers,
      currentBuildingId,
      handleImportTenantModalToggle,
      history,
    } = props;

    const tenant = {
      id: tenantId,
      name: tenantName,
      email: tenantEmail,
      phone: tenantPhone,
      birthday: tenantBirthday && tenantBirthday.format('YYYY-MM-DD'),
      userId: userId,
    };

    if (tenantId) {
      const { email, ...updatedTenant } = tenant;
      updateTenant(updatedTenant, customFields).then(updatedTenant => {
        fetchProfileCustomFieldAnswers(currentBuildingId, updatedTenant.id);
        history.push('/members');
      });
    } else {
      addNewTenant(tenant, [buildingId], customFields)
        .then(newTenant => {
          if (values.sendEmails) {
            const emails = [values.tenantEmail];
            handleImportTenantModalToggle(emails || [], true);
          }

          if (newTenant) {
            fetchProfileCustomFieldAnswers(currentBuildingId, newTenant.id);
          }

          history.push('/members');
        })
        .catch(error => {
          const { response } = error;

          const mapErrosToInputNames = {
            email: 'tenantEmailError',
          };
          const errors = convertErrorsArrayToObject(
            response && response.data && response.data.errors,
            mapErrosToInputNames
          );
          setErrors(errors);
        });
    }
  },
})(NewMember);
