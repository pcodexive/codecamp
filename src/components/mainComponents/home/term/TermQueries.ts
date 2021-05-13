import { gql } from "@apollo/client";

export const FETCH_REGISTER_PRECAMPS = gql`
    query fetchRegisterPrecamps {
        fetchRegisterPrecamps {
            _id
            month
            start
            end
            isExpired
        }
    }
`

export const FETCH_REGISTER_CODECAMPS = gql`
  query fetchRegisterCodecamps {
    fetchRegisterCodecamps {
      _id
      stage
      remaining
      start
      end
      isExpired
    }
  }
`;