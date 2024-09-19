"use client";

import { useUser } from "@/src/context/user.provider";
import { Logout } from "@/src/services/authServices";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function NavDropdown() {
  const router = useRouter();
  const { user, setIsLoading: UserLoading } = useUser();
  const handleDropdownRouteNavigation = (pathname: string) => {
    router.push(pathname);
  };

  const handleUserLogout = () => {
    Logout();
    UserLoading(true);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          size="sm"
          isBordered
          color="primary"
          className="cursor-pointer"
          src={user?.profilePhoto}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          onClick={() => handleDropdownRouteNavigation("/profile")}
          key="profile"
        >
          Profile
        </DropdownItem>
        <DropdownItem
          onClick={() => handleDropdownRouteNavigation("/profile/create-post")}
          key="create-post"
        >
          Create Post
        </DropdownItem>
        <DropdownItem
          onClick={() => handleDropdownRouteNavigation("profile")}
          key="profile"
        >
          Profile
        </DropdownItem>
        <DropdownItem
          onClick={() => handleUserLogout()}
          key="sign-up"
          className="text-danger"
          color="danger"
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
