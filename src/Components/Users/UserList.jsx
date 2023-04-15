import Card from '../UI/Card'
import React from 'react'
import styles from './UserList.module.css'

export default function UserList(props) {
  return (
      <Card className={styles.users}>
          <ul>
              {props.users.map((user) => {
                  return <li key={user.id}>
                      { user.name} ({user.age} Years Old)
                  </li>
              })}
          </ul>
    </Card>
  )
}
