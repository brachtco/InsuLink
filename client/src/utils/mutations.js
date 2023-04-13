import { gpl } from '@appollo/client';

export const ADD_USER = gql`
    mutation addUser($userFirstName: String! $userLastName: String!)
        addUser(userFirstName: $userFirstName, $userLastName: $userLastName) {
            _id
            userFirstName
            userLastName
            age
            gender
            bio
            interests
            hometown
            email
            password
            school
        }`;

        export const ADD_SCHOOL =gql`
            mutation addSchool($schoolName: String! $schoolImage: String! schoolRegion: String!){
                addSchool(schoolName: $schoolName, $schoolImage: $$schoolImage, schoolRegion: $schoolRegion){
                    name
                    image
                    region
                }
            }
            `;