'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { useModal } from '@faceless-ui/modal'
import { toast } from 'sonner'

import { useAuth } from '@providers/Auth'
import { getServerSideURL } from '@utils/getURL'

import { Text } from '@forms/fields/Text'
import Form from '@forms/Form'
import Submit from '@forms/Submit'

import { Button } from '@components/ButtonComponent'
import { Heading } from '@components/Heading'
import { Message } from '@components/Message'

import classes from './page.module.scss'

export const DeletionConfirmationForm: React.FC<{
  modalSlug: string
}> = (props) => {
  const { modalSlug } = props
  const { closeModal } = useModal()
  const [hasEmail, setHasEmail] = React.useState(false)
  const [hasPW, setHasPW] = React.useState(false)
  const router = useRouter()
  const { login, user } = useAuth()

  const deleteAccount = React.useCallback(
    async ({ data }) => {
      if (user) {
        if (data.modalEmail !== user.email) {
          toast.error(
            'Email provided does not match your account, please try again.'
          )
          return undefined
        }

        try {
          const confirmedUser = await login({
            email: data.modalEmail as string,
            password: data.modalPassword as string
          })

          if (confirmedUser && confirmedUser.id === user.id) {
            try {
              const req = await fetch(
                `${getServerSideURL()}/api/users/${user.id}`,
                {
                  method: 'DELETE',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }
              )

              if (req.ok) {
                toast.success('Your account has been deleted successfully.')
                router.push('/logout')
              } else {
                throw new Error('Failed to delete account')
              }
            } catch (e) {
              toast.error(
                'There was an issue deleting your account. Please try again.'
              )
            }
          }
        } catch (e) {
          toast.error('Incorrect email or password.')
        }
      }
    },
    [login, router, user]
  )

  return (
    <Form onSubmit={deleteAccount}>
      <Heading as="h3" marginTop={false}>
        Are you sure you want to delete your account?
      </Heading>
      <Message
        className={classes.warning}
        error="Deleting your account cannot be undone."
      />
      {/* <p>
        Team ownership will be transferred to another team member where
        possible. If no other team members exist, the team and associated
        projects / deployments will be
        <strong> permanently deleted</strong>.
      </p> */}
      <p>To proceed re-enter your account details below:</p>
      <Text
        className={classes.emailInput}
        label="Email"
        onChange={(value) => {
          setHasEmail(Boolean(value))
        }}
        path="modalEmail"
        required
      />
      <Text
        label="Password"
        onChange={(value) => {
          setHasPW(Boolean(value))
        }}
        path="modalPassword"
        required
        type="password"
      />
      <div className={classes.modalActions}>
        <Button
          appearance="secondary"
          label="Cancel"
          onClick={() => closeModal(modalSlug)}
        />
        <Submit
          appearance="danger"
          disabled={!(hasEmail && hasPW)}
          label="Delete my account"
        />
      </div>
    </Form>
  )
}
