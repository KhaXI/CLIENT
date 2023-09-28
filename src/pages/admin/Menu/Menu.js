import React, { useState } from 'react'
import { Tab, Button } from "semantic-ui-react";
import "./menu.scss";
import { ListMenu, MenuForm } from "../../../components/Admin/Menu";
import { BasicModal } from "../../../components/Shared";

export function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const onReload = () => setReload((prevState) => !prevState);

  const panes = [
    {
      menuItem: "Menus activos",
      render: () => (
        <Tab.Pane attached={false}>
          <ListMenu active={true} reload={reload} onReload={onReload} />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Menus inactivos",
      render: () => (
        <Tab.Pane attached={false}>
          <ListMenu active={false} reload={reload} onReload={onReload} />
        </Tab.Pane>
      )
    },
  ]
  return (
    <>
      <div className='menu-page'>
        <Button className='menu-page__add' primary onClick={onOpenCloseModal}>
          Nuevo Menu
        </Button>
        <Tab menu={{ secondary: true }} panes={panes} />
      </div>

      <BasicModal show={showModal} close={onOpenCloseModal} title="Crear Menu">
        <MenuForm onClose={onOpenCloseModal} onReload={onReload} />
      </BasicModal>
    </>
  )
}
