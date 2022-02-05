import gql from "graphql-tag";

export const graphQL_shema = () => {
    const Get_Calendar_Data = gql`
        query  {
  getCalendar {
      id
      start
      end
  }  
}
    `;
    const Delete_Items = gql`
        mutation($idLive:[Int!]!) {
            deleteLive(idLive:$idLive){
                deleteditems
                undeleteditems
                code
            }
        }
    `;
    const Get_Diffusion_Live = gql`
        mutation($id:Int!) {
            getDiffusionLink(id:$id){
                code
                diffLinkTr
                diffLink
                visLink
            }
        }
    `;
    const Add_Reservation = gql`
               mutation ($idAvailability:Int!,$input:ToReserve!) {
          createReservation(idAvailability:$idAvailability, input:$input) {
              code
              message
          }  
        }
    `;
    return ({
        Get_Calendar_Data,
        Delete_Items,
        Get_Diffusion_Live,
        Add_Reservation
    })
}