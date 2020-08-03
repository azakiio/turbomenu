import React, { useState } from "react";
import { FaChevronRight, FaEllipsisH } from "react-icons/fa";
import { GrDrag } from "react-icons/gr";

function Builder(props) {
  const block = "builder";
  const [menu, setMenu] = useState([]);
  const [isSectionInput, setSectionInput] = useState(false);

  function addSection(event) {
    event.preventDefault();
    setMenu([...menu, { name: event.target.name.value, description: event.target.description.value }]);
  }

  return (
    <main className={block}>
      <h2 className={block + "__title"}>Menu</h2>
      {!menu.length && <p>Start building your menu by adding your first menu section.</p>}
      <div className={block + "__menu"}>
        {menu.map((item, index) => (
          <Section key={index} name={item.name} description={item.description} />
        ))}
      </div>
      {isSectionInput && <SectionInput handleSubmit={addSection} />}
      {!isSectionInput && <button onClick={() => setSectionInput(!isSectionInput)}>+ Add Menu section</button>}
    </main>
  );
}

function Section(props) {
  const block = "section";
  return (
    <section className={block}>
      <div className={block + "__header"}>
        <div className={block + "__left"}>
          <div className={block + "__buttons"}>
            <GrDrag />
            <FaChevronRight />
            {props.name}
          </div>
          <div className={block + "__description"}>{props.description}</div>
        </div>

        <div className={block + "__right"}>
          <FaEllipsisH />
        </div>
      </div>
    </section>
  );
}

function SectionInput(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Name <input name="name" type="text" required />
      </label>
      <label>
        Description (Optional): <input name="description" type="text" />
      </label>
      <button type="submit">Add</button>
      <button type="reset">Cancel</button>
    </form>
  );
}

export default Builder;

// function MenuItem(props) {

//     return (
//     <li>
//         <div>{props.name}</div>
//         <div>{props.description}</div>
//         <div>{props.price}</div>
//     </li>);
// }
