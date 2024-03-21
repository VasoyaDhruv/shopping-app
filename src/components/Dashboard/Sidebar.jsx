import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  useSelect,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
 
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/operations/authAPI";
import toast from 'react-hot-toast'
import ConfirmationModal from "../common/ConfirmationModal";
const Sidebar = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null)
  const handleLogout = () => {
    dispatch(logout(navigate));
  };
  return (
    <div>
      <Card className="h-[100vh] w-full max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5 fixed top-0 left-0 text-white bg-gray-700 ">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            E-Commerce
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            Settings
          </ListItem>
        
          {
            token !== null && (
              <Link  onClick={() => {
                
                setConfirmationModal({
                  text1: "Are you sure?",
                  text2: "You will be logged out of your account.",
                  btn1Text: "Logout",
                  btn2Text: "Cancel",
                  btn1Handler: () =>  dispatch(logout(navigate)),
                  btn2Handler: () => setConfirmationModal(null),
                })
              }}> 
                <ListItem>
               <ListItemPrefix>
                  <PowerIcon className="h-5 w-5 mr-2" />
                </ListItemPrefix>
                  Log Out
                 </ListItem>
              </Link>
            )
          }
          
         
        </List>
      </Card>
      {confirmationModal && <ConfirmationModal modalData = {confirmationModal}/>}
      </div>
    );
}

export default Sidebar