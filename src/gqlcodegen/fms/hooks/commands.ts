import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../types'

const defaultOptions = {}
export type SendCommandMutationVariables = Types.Exact<{
  Id: Types.Scalars['String']
  Type: Types.CommandType
}>

export type SendCommandMutation = {
  commands: { sendCommand: Pick<Types.CommandResponse, 'Id' | 'Type'> }
}

export const SendCommandDocument = gql`
  mutation sendCommand($Id: String!, $Type: CommandType!) {
    commands {
      sendCommand(param: { Id: $Id, Type: $Type }) {
        Id
        Type
      }
    }
  }
`

/**
 * __useSendCommandMutation__
 *
 * To run a mutation, you first call `useSendCommandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendCommandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendCommandMutation, { data, loading, error }] = useSendCommandMutation({
 *   variables: {
 *      Id: // value for 'Id'
 *      Type: // value for 'Type'
 *   },
 * });
 */
export function useSendCommandMutation(
  baseOptions?: Apollo.MutationHookOptions<SendCommandMutation, SendCommandMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<SendCommandMutation, SendCommandMutationVariables>(
    SendCommandDocument,
    options,
  )
}
export type SendCommandMutationHookResult = ReturnType<typeof useSendCommandMutation>
