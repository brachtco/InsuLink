import { gql } from '@apollo/client'

export const QUERY_USERS = gql`
    query getUsers {
        users {
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
        }
    }
    `;

export const QUERY_SCHOOLS = gql`
    query getSchools {
        schools {
            _id
            name
            image
            region
        }
    }
    `;