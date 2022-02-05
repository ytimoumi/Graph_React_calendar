export const DataConstraints = ()=>{

    const UserCredentialStorageData = () => {
        return (
            {
                storageUsername:"",
                storagePassword:"",
                storageIsRememberMe:false,
            }
        )
    }

    return({
        UserCredentialStorageData,
    })

}