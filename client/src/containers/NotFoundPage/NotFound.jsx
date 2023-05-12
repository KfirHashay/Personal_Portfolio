/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { AppWrap } from '../../wrapper';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div id="NotFoundPage">
      <div className="code">
        <Typewriter
          className="code"
          options={{
            autoStart: true,
            loop: false,
            delay: 80,
            skipAddStyles: false,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `<span style="color: #719c4b;">// page not found ?</span>`
              )
              .typeString(`<br/><span style="color: #bdbdbd;">. . .</span>`)
              .typeString(
                `<br/><span style="color: #a07aac; margin-left:20px;">return (</span>`
              )
              .typeString('<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <>')
              .typeString(
                `<br/><span style="color: #4eacf3; margin-left:55px;">{component </span><span style="color: #ffffff; margin-left:4px;">?</span><span style="color: #f0c674; margin-left:4px;">(</span>`
              )
              .typeString(
                `<br/>  <span style="color: #5fcf80; margin-left:70px;"> &#65308;Component /&#65310;</span>`
              )
              .typeString(
                `<br/> <span style="color: #f0c674;  margin-left:55px;"> ) : ( </span>`
              )
              .typeString(
                '<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<'
              )
              .typeString(
                `<span style="color: #4eacf3; ">p</span><span style="color: #a7d4f6;">  style</span><span style="color: #fff;">=</span><span style="color: #4eacf3;">{</span><span style="color: #f0c674;">{</span><span style="color: #a7d4f6;"> color : </span><span style="color: #e89a88;">"#f71515" </span><span style="color: #f0c674;">}</span><span style="color: #4eacf3;">}</span>`
              )
              .typeString('>')
              .typeString(`<span style="color: #f71515;">Eror 404</span>`)
              .typeString('<')
              .typeString(`<span style="color: #4eacf3;">p</span>`)
              .typeString('/')
              .typeString('>')
              .typeString(
                '<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<'
              )
              .typeString(
                `<span style="color: #4eacf3;">p</span><span style="color: #a7d4f6;">  style</span><span style="color: #fff;">=</span><span style="color: #4eacf3;">{</span><span style="color: #f0c674;">{</span><span style="color: #a7d4f6;"> color : </span><span style="color: #e89a88;">"#f71515" </span><span style="color: #f0c674;">}</span><span style="color: #4eacf3;">}</span>`
              )
              .typeString('>')
              .typeString(
                `<span style="color: #f71515;">Page Not Found!</span>`
              )
              .typeString('<')
              .typeString(`<span style="color: #4eacf3;">p</span>`)
              .typeString('/')
              .typeString('>')

              .typeString(
                '<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<'
              )
              .typeString(
                `<span style="color: #5fcf80;">Link</span><span style="color: #a7d4f6;">  to</span><span style="color: #fff;">=</span><span style="color: #e89a88;">"/"</span>`
              )
              .typeString('>')
              .typeString(`<span style="color: #fff;">Go Home</span>`)
              .typeString('<')
              .typeString(`<span style="color: #5fcf80;">Link</span>`)
              .typeString('/')
              .typeString('>')
              .typeString(
                `<br/>  <span style="color: #f0c674; margin-left:55px;">)</span>`
              )
              .typeString(`<span style="color: #f0c674;">)</span>`)
              .typeString(`<span style="color: #4eacf3;">}</span>`)
              .typeString(
                '<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#65308;/&#65310;'
              )
              .typeString(
                `<br/><span style="color: #a07aac; margin-left:20px;">)</span>`
              )
              .start();
          }}
        />
      </div>

      <center>
        <span style={{ color: '#f71515' }}>Error 404</span>
        <br />
        <span style={{ color: '#f71515' }}>Page Not Found!</span>
        <br />
        <Link to="/">Go Home</Link>
      </center>
    </div>
  );
};

export default AppWrap(NotFound, 'Error');
