import React from 'react';
import Button from './assetComponents/Button';

export default function Section1 ({title, body, button}){
    return(
        <section>
        <h3>{title}</h3>
        <p>{body}</p>
        <Button title={button.title} name={"Klaus"} />
      </section>
    )
}