import { gql } from '@apollo/client'

export const QUERY_USERS = gql`
    query getUsers {
        users {
            _id
            firstName
            lastName
            age
            gender
            bio
            interests
            hometown
            photo
            email
        }
    }
    `;

export const QUERY_USER = gql`
    query getUser($id: ID!) {
        user(_id: $id) {
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

