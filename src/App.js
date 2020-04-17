import React from 'react';
import './App.css';
function App() {
  return <div className="grid-container">
    <div className="preview usa-prose site-prose ">
      <h6>Standard alerts</h6>

      <div className="usa-alert usa-alert--info">
        <div className="usa-alert__body">
          <h3 className="usa-alert__heading">Informative status</h3>
          <p className="usa-alert__text">Lorem ipsum dolor sit amet, <a href="javascript:void(0);">consectetur adipiscing</a> elit, sed do
            eiusmod.</p>
        </div>
      </div>

      <div className="usa-alert usa-alert--warning">
        <div className="usa-alert__body">
          <h3 className="usa-alert__heading">Warning status</h3>
          <p className="usa-alert__text">Lorem ipsum dolor sit amet, <a href="javascript:void(0);">consectetur adipiscing</a> elit, sed do
            eiusmod.</p>
        </div>
      </div>

      <div className="usa-alert usa-alert--error" role="alert">
        <div className="usa-alert__body">
          <h3 className="usa-alert__heading">Error status</h3>
          <p className="usa-alert__text">Lorem ipsum dolor sit amet, <a href="javascript:void(0);">consectetur adipiscing</a> elit, sed do
            eiusmod.</p>
        </div>
      </div>

      <div className="usa-alert usa-alert--success">
        <div className="usa-alert__body">
          <h3 className="usa-alert__heading">Success status</h3>
          <p className="usa-alert__text">Lorem ipsum dolor sit amet, <a href="javascript:void(0);">consectetur adipiscing</a> elit, sed do
            eiusmod.</p>
        </div>
      </div>

      <h6>Slim alert</h6>

      <div className="usa-alert usa-alert--info usa-alert--slim">
        <div className="usa-alert__body">
          <p className="usa-alert__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        </div>
      </div>

      <h6>Alert with no icon</h6>

      <div className="usa-alert usa-alert--info usa-alert--no-icon">
        <div className="usa-alert__body">
          <p className="usa-alert__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        </div>
      </div>

    </div>
    <div className="preview usa-prose site-prose ">
      <h6>Borderless</h6>

      <div className="usa-accordion">
        <h2 className="usa-accordion__heading">
          <button className="usa-accordion__button" aria-expanded="true" aria-controls="a1">
            First Amendment
          </button>
        </h2>
        <div id="a1" className="usa-accordion__content usa-prose">
          <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging
            the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a
            redress of grievances.</p>

        </div>

        <h2 className="usa-accordion__heading">
          <button className="usa-accordion__button" aria-expanded="false" aria-controls="a2">
            Second Amendment
          </button>
        </h2>
        <div id="a2" className="usa-accordion__content usa-prose" hidden="">
          <p>A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms,
            shall not be infringed.</p>
          <ul>
            <li>This is a list item</li>
            <li>Another list item</li>
          </ul>

        </div>


        <h2 className="usa-accordion__heading">
          <button className="usa-accordion__button" aria-expanded="false" aria-controls="a3">
            Third Amendment
          </button>
        </h2>
        <div id="a3" className="usa-accordion__content usa-prose" hidden="">
          <p>No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a
            manner to be prescribed by law.</p>

        </div>


        <h2 className="usa-accordion__heading">
          <button className="usa-accordion__button" aria-expanded="false" aria-controls="a4">
            Fourth Amendment
          </button>
        </h2>
        <div id="a4" className="usa-accordion__content usa-prose" hidden="">
          <p>The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and
            seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and
            particularly describing the place to be searched, and the persons or things to be seized.</p>

        </div>

        <h2 className="usa-accordion__heading">
          <button className="usa-accordion__button" aria-expanded="false" aria-controls="a5">
            Fifth Amendment
          </button>
        </h2>
        <div id="a5" className="usa-accordion__content usa-prose" hidden="">
          <p>No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a
            Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or
            public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be
            compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due
            process of law; nor shall private property be taken for public use, without just compensation.</p>

        </div>

      </div>

      <h6>Bordered</h6>

      <div className="usa-accordion usa-accordion--bordered">


        <h2 className="usa-accordion__heading">
          <button className="usa-accordion__button" aria-expanded="true" aria-controls="b-a1">
            First Amendment
          </button>
        </h2>
        <div id="b-a1" className="usa-accordion__content usa-prose">
          <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging
            the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a
            redress of grievances.</p>

        </div>


        <h2 className="usa-accordion__heading">
          <button className="usa-accordion__button" aria-expanded="false" aria-controls="b-a2">
            Second Amendment
          </button>
        </h2>
        <div id="b-a2" className="usa-accordion__content usa-prose" hidden="">
          <p>A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms,
            shall not be infringed.</p>
          <ul>
            <li>This is a list item</li>
            <li>Another list item</li>
          </ul>

        </div>


        <h2 className="usa-accordion__heading">
          <button className="usa-accordion__button" aria-expanded="false" aria-controls="b-a3">
            Third Amendment
          </button>
        </h2>
        <div id="b-a3" className="usa-accordion__content usa-prose" hidden="">
          <p>No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a
            manner to be prescribed by law.</p>

        </div>


        <h2 className="usa-accordion__heading">
          <button className="usa-accordion__button" aria-expanded="false" aria-controls="b-a4">
            Fourth Amendment
          </button>
        </h2>
        <div id="b-a4" className="usa-accordion__content usa-prose" hidden="">
          <p>The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and
            seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and
            particularly describing the place to be searched, and the persons or things to be seized.</p>

        </div>


        <h2 className="usa-accordion__heading">
          <button className="usa-accordion__button" aria-expanded="false" aria-controls="b-a5">
            Fifth Amendment
          </button>
        </h2>
        <div id="b-a5" className="usa-accordion__content usa-prose" hidden="">
          <p>No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a
            Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or
            public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be
            compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due
            process of law; nor shall private property be taken for public use, without just compensation.</p>

        </div>

      </div>

      <h6>Multiselectable</h6>

      <div className="usa-accordion" aria-multiselectable="true">


        <h2 className="usa-accordion__heading">
          <button className="usa-accordion__button" aria-expanded="true" aria-controls="m-a1">
            First Amendment
          </button>
        </h2>
        <div id="m-a1" className="usa-accordion__content usa-prose">
          <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging
            the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a
            redress of grievances.</p>

        </div>
        <h2 className="usa-accordion__heading">
          <button className="usa-accordion__button" aria-expanded="false" aria-controls="m-a2">
            Second Amendment
          </button>
        </h2>
        <div id="m-a2" className="usa-accordion__content usa-prose" hidden="">
          <p>A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms,
            shall not be infringed.</p>
          <ul>
            <li>This is a list item</li>
            <li>Another list item</li>
          </ul>

        </div>


        <h2 className="usa-accordion__heading">
          <button className="usa-accordion__button" aria-expanded="false" aria-controls="m-a3">
            Third Amendment
          </button>
        </h2>
        <div id="m-a3" className="usa-accordion__content usa-prose" hidden="">
          <p>No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a
            manner to be prescribed by law.</p>

        </div>

        <h2 className="usa-accordion__heading">
          <button className="usa-accordion__button" aria-expanded="false" aria-controls="m-a4">
            Fourth Amendment
          </button>
        </h2>
        <div id="m-a4" className="usa-accordion__content usa-prose" hidden="">
          <p>The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and
            seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and
            particularly describing the place to be searched, and the persons or things to be seized.</p>

        </div>


        <h2 className="usa-accordion__heading">
          <button className="usa-accordion__button" aria-expanded="false" aria-controls="m-a5">
            Fifth Amendment
          </button>
        </h2>
        <div id="m-a5" className="usa-accordion__content usa-prose" hidden="">
          <p>No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a
            Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or
            public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be
            compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due
            process of law; nor shall private property be taken for public use, without just compensation.</p>

        </div>

      </div>
    </div>
  </div>;
}

export default App;
