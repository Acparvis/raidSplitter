import React from "react";
import { FaShieldAlt, FaBriefcaseMedical } from 'react-icons/fa';
import {GiSpikedMace} from 'react-icons/gi';
import {FiShield} from 'react-icons/fi'

const playerRoles = [
  { roleName: "Tank", icon: <FaShieldAlt/>},
  { roleName: "OffTank", icon: <FiShield/>},
  { roleName: "DPS", icon: <GiSpikedMace/>},
  { roleName: "Healer", icon: <FaBriefcaseMedical/>},
]

export default playerRoles;