import { gql } from '@apollo/client'

export const QUERY_USERS = gql`
    query getUsers {
        user {
            _id
            firstName
            lastName
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
        
        `;

    export const QUERY_ME = gql`
        query me {
            me { 
                _id
                email
                firstName
                lastName
                gender
                age
                hometown
                interests
                photo
            }
        }
    `;

