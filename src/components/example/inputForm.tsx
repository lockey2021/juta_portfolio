import React, {useState} from 'react';
import Greeting from './greeting';

type InputFormProps = {

}

const InputForm: React.FC<InputFormProps> = () => {
    // useState hooks for name & lastName
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    return (
    <div>
      {/* input for name */}
        <label>Name:  
          <input type='text'
        /* set input value to value of name */
           value={name} 
            /* using onChange event to set name, every time when the value of input has changed */
          onChange={ (event) => setName(event.target.value) } />
        </label>

          {/* input for lastName */}
        <label> Last name: 
            <input type='text' value={lastName} 
              onChange={ (event) => setLastName(event.target.value) } />
        </label>

        {/* dispaly greetings */}
        {/* here we use greeting-component props like a HTML attributes */}
        <Greeting name={name} lastName={lastName} />

    </div>
  )
}

export default InputForm
