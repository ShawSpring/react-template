// import { } from 'react';
export interface HelloProps {
// children: React.ReactNode,
name: string
}

function Hello(props: HelloProps) {
  
    return (
        <>
            <h1 className="text-3xl font-bold text-center py-4 ring dark:text-white dark:bg-gray-800">hi,{props.name}</h1>
        </>
    );
}

export default Hello;