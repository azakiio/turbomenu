import React, { useState } from "react";

function Builder(props) {
    const block = "builder";
    const [menu, setMenu] = useState({});

    return (
        <section className={block}>
            <h2 className={block + "__title"}>Menu</h2>
            {Object.keys(menu).length === 0 && <p>Start building your menu by adding your first menu section.</p>}
            <div className={block + "__menu"}>
                
            </div>
            <button>+ Add Menu section</button>


        </section>

    );
}

export default Builder;