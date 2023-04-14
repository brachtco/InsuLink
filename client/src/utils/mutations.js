import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser(
        $firstName: String!, 
        $lastName: String!, 
        $email: String!, 
        $password: String!) {
        addUser(
            firstName: $firstName, 
            lastName: $lastName, 
            email: $email, 
            password: $password) {
                token
                user {
                    _id
                    firstName
                    lastName
                    email
            }
        }      
    }`;

export const ADD_SCHOOL = gql`
    mutation addSchool($schoolName: String! $schoolImage: String! $schoolRegion: String!){
        addSchool(schoolName: $schoolName, schoolImage: $schoolImage, schoolRegion: $schoolRegion){
            name
            image
            region
        }
    }`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
          _id
          email
        }
      }
    }`;    