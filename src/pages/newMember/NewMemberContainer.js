import { connect } from 'react-redux';
import NewMemberForm from './NewMemberForm';

import {
  addNewTenant,
  changeTenantStatus,
  getCurrentTenant,
  getTenantCustomFields,
  resetCurrentTenant,
  setIsUserInCommunity,
  updateTenant,
} from '../../../reducers/tenants/tenants.actions';
import { fetchProfileCustomFieldAnswers } from '../../../reducers/profile/profile.actions';
import {
  selectIsChangingTenantStatus,
  selectIsCreatingTenant,
  selectIsFetchingCurrentTenant,
  selectIsUpdatingTenant,
  selectCustomFields,
  selectIsUserAvailableInCommunity,
} from '../../../reducers/tenants/tenants.selectors';
import { selectCurrentBuildingId } from '../../../reducers/currentBuilding/currentBuilding.selectors';
import { selectProfileCustomFieldAnswers } from '../../../reducers/profile/profile.selectors';
import { selectBuildings } from '../../../reducers/building/building.selectors';
import withAnalytics from '../../../hoc/withAnalytics/withAnalytics';

const mapStateToProps = state => {
  return {
    currentTenant: state.tenants.currentTenant,
    isFetchingCurrentTenant: selectIsFetchingCurrentTenant(state),
    isCreatingTenant: selectIsCreatingTenant(state),
    isUpdatingTenant: selectIsUpdatingTenant(state),
    isChangingTenantStatus: selectIsChangingTenantStatus(state),
    customFields: selectCustomFields(state),
    currentBuildingId: selectCurrentBuildingId(state),
    answers: selectProfileCustomFieldAnswers(state),
    buildings: selectBuildings(state),
    isUserAvailableInCommunity: selectIsUserAvailableInCommunity(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentTenant: id => dispatch(getCurrentTenant(id)),
    addNewTenant: (tenant, buildings, fields = {}) => dispatch(addNewTenant(tenant, buildings, fields)),
    updateTenant: (tenant, fields) => dispatch(updateTenant(tenant, fields)),
    resetCurrentTenant: () => dispatch(resetCurrentTenant()),
    changeTenantStatus: tenantId => dispatch(changeTenantStatus(tenantId)),
    fetchProfileCustomFieldAnswers: (buildingId, userId) =>
      dispatch(fetchProfileCustomFieldAnswers(buildingId, userId)),
    setIsUserInCommunity: data => dispatch(setIsUserInCommunity(data)),
    fetchTenantCustomFields: buildingId => dispatch(getTenantCustomFields(buildingId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMemberForm);
