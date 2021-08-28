import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import { useForm } from 'react-hook-form';

import './style.scss';


const MessagePrive = ({ conversations }) => {
  const {
    register,
    handleSubmit,
    // formState: {
    //   errors,
    // },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Succès", data);
    // newMessage(data);
  };

  console.log(conversations);

  return (
    <div className="messageprive">
      <div className="messageprive__title">Ma conversation</div>
      {conversations.map((conversation) => {
        let isFromMe = false;
        conversation.expeditor === "Hel" ? isFromMe = true : isFromMe = false;
        return <Message key={conversation.id} {...conversation} isFromMe={isFromMe} />;
      })};
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Écrivez votre message"
          {...register('message')}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

MessagePrive.propTypes = {

};

export default MessagePrive;
