import tw from "tailwind-styled-components";

export const Page = tw.div`
bg-gray-50
 min-h-screen
 p-12
 flex
 justify-center
`;

export const Container = tw.div`
 max-w-4xl
`;

export const ListContainer = tw.ul`
  flex
  flex-wrap
  justify-between
`;

type ListItemProps = { $open: string };

export const ListItem = tw.li<ListItemProps>`
  relative
  p-6
  m-3
  w-52
  ${(p: ListItemProps) => (p.$open ? "bg-gray-300" : "bg-green-300")}
  text-gray-800
  font-bold
  rounded-md
  text-center
`;

export const ActionContainer = tw.div`
  flex
  justify-center
  mt-6
  space-x-1
`;

export const DoneButton = tw.button`
  bg-gray-700
  hover:bg-gray-500
  text-white
  rounded-md
  p-2
`;

export const RemoveButton = tw.button`
  bg-red-600
  hover:bg-red-400
  text-white
  rounded-md
  p-2
`;

export const Form = tw.form`
  flex
`;

export const Input = tw.input`
  bg-gray-200
  p-2
  rounded-md
  w-full
`;

export const NewButton = tw.button`
  bg-green-600
  text-white
  rounded-md
  p-2
  ml-2
  min-w-fit
`;

export const Divider = tw.div`
  border-b-2
  border-gray-300
  w-full
  my-3
`;

export const Title = tw.h1`
  text-center
  pb-12
  font-bold
  text-3xl
`;

export const Id = tw.span`
  absolute
  top-1
  left-1
  text-xs
  text-gray-400
`;
