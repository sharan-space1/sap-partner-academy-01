/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/IncidentReporting/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}