import { gql } from '@apollo/client'

export const QUERY_USERS = gql`
    query getUsers {
        user {
            _id
            userFirstName
            userLastName
            age
            gender
            bio
            interests
            hometown
            email
        }
    }
    `;

    export const QUERY_SCHOOLS =gql`
        query getSchools {
            school {
                _id 
                name
                image
                region
            }
        }
        `

        //Insomnia test routes
        //Appollo server
        //