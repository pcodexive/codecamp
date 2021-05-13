import { gql } from "@apollo/client";

export const CREATE_APPLICATION = gql`
    mutation createApplication($createApplicationInput: CreateApplicationInput!){
        createApplication(createApplicationInput: $createApplicationInput) {
            _id
        }
    }
`