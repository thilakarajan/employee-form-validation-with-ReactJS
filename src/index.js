import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const validate = (e) => {
  e.preventDefault()
}

const Employee = () => {
  const [empty1, setEmpty1] = useState(false)
  const [empty2, setEmpty2] = useState(false)
  const [empty3, setEmpty3] = useState(false)
  const [empty4, setEmpty4] = useState(false)
  const [empty5, setEmpty5] = useState(false)
  const [empty6, setEmpty6] = useState(false)
  const [empty7, setEmpty7] = useState(false)
  const [empty8, setEmpty8] = useState(false)
  const [empty9, setEmpty9] = useState(false)
  const [empty10, setEmpty10] = useState(false)
  const [empty11, setEmpty11] = useState(false)
  const [empty12, setEmpty12] = useState(false)

  const handleInput = (e) => {
    let value = e.target.value
    if (e.target.id === 'firstName') {
      if (value === '') {
        setEmpty1(true)
      } else {
        setEmpty1(false)
      }
    }
    if (e.target.id === 'lastName') {
      if (value === '') {
        setEmpty2(true)
      } else {
        setEmpty2(false)
      }
    }
    if (e.target.id === 'birthDate') {
      if (value === '') {
        setEmpty3(true)
      } else {
        setEmpty3(false)
      }
    }
    if (e.target.id === 'email') {
      if (value === '') {
        setEmpty4(true)
      } else {
        setEmpty4(false)
      }
    }
    if (e.target.id === 'phoneNumber') {
      if (value === '') {
        setEmpty5(true)
      } else {
        setEmpty5(false)
      }
    }
    if (e.target.id === 'gender') {
      if (value === '') {
        setEmpty6(true)
      } else {
        setEmpty6(false)
      }
    }
    if (e.target.id === 'startTime') {
      if (value === '') {
        setEmpty7(true)
      } else {
        setEmpty7(false)
      }
    }
    if (e.target.id === 'endTime') {
      if (value === '') {
        setEmpty8(true)
      } else {
        setEmpty8(false)
      }
    }
    if (e.target.id === 'jobPosition') {
      if (value === '') {
        setEmpty9(true)
      } else {
        setEmpty9(false)
      }
    }
    if (e.target.id === 'terms') {
      if (value === '') {
        setEmpty10(true)
      } else {
        setEmpty10(false)
      }
    }
    if (e.target.id === 'designation') {
      if (value === '') {
        setEmpty11(true)
      } else {
        setEmpty11(false)
      }
    }
    if (e.target.id === 'billingHours') {
      if (value === '') {
        setEmpty12(true)
      } else {
        setEmpty12(false)
      }
    }
  }

  return (
    <div>
      <h1>Employee</h1>
      <form action="" onSubmit={validate}>
        <div className="inputs">
          <label>
            First Name:
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`${empty1}`}
              onInput={handleInput}
            />
            {() => {
              if (empty1) {
                ;<p style={{ color: 'red' }}>Please enter your first name</p>
              }
            }}
          </label>
          <label htmlFor="">
            Second Name:
            <input type="text" id="secondName" name="secondName" />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={`${empty2}`}
              onInput={handleInput}
            />
          </label>
          <label>
            Birth Date:
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              className={`${empty3}`}
              onInput={handleInput}
            />
          </label>
          <label htmlFor="">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              className={`${empty4}`}
              onInput={handleInput}
            />
          </label>
          <label htmlFor="">
            Phone Number:
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className={`${empty5}`}
              onInput={handleInput}
            />
          </label>
          <label htmlFor="">
            Select Gender:
            <select
              name="gender"
              id="gender"
              className={`${empty6}`}
              onInput={handleInput}
            >
              <option value="">select..</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label htmlFor="">
            Start Time:
            <input
              type="time"
              id="startTime"
              name="startTime"
              className={`${empty7}`}
              onInput={handleInput}
            />
          </label>
          <label htmlFor="">
            End Time:
            <input
              type="time"
              id="endTime"
              name="endTime"
              className={`${empty8}`}
              onInput={handleInput}
            />
          </label>
          <label htmlFor="">
            Job Position:
            <input
              type="text"
              id="jobPosition"
              name="jobPosition"
              className={`${empty9}`}
              onInput={handleInput}
            />
          </label>
          <label htmlFor="">
            Select Terms:
            <select
              name="terms"
              id="terms"
              className={`${empty10}`}
              onInput={handleInput}
            >
              <option value="">select..</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <label htmlFor="">
            Select Designation:
            <select
              name="designation"
              id="designation"
              className={`${empty11}`}
              onInput={handleInput}
            >
              <option value="">select..</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <label htmlFor="">
            Billable Hours:
            <input
              type="number"
              id="billableHours"
              name="billableHours"
              className={`${empty12}`}
              onInput={handleInput}
            />
          </label>
          <label htmlFor="">
            is Billable
            <input type="checkbox" id="isBillable" name="isBillable" />
          </label>
        </div>
        <div className="button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Employee />)
