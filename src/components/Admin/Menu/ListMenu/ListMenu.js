import React, { useState, useEffect } from 'react'
import { Menu } from "../../../../api";
import { size, map } from "lodash";
import { Loader } from "semantic-ui-react";
import { MenuItem } from "../MenuItem";

const menuController = new Menu();

export function ListMenu(props) {
    const { active, reload, onReload } = props
    const [menus, setMenus] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                setMenus(null)
                const response = await menuController.getMenu(active);
                setMenus(response);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [active, reload])

    if (!menus) return <Loader active inline="centered" />
    if (size(menus) === 0) return "Mo hay menus"

    return map(menus, (menu) => <MenuItem key={menu._id} menu={menu} onReload={onReload} />)
}
