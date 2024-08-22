import {useState} from 'react'

export const useColorlist = () => {
    const [draggedColor, setDraggedColor] = useState(null);

    const handleDragStart = (color) => {
        setDraggedColor(color);
      };

    return { draggedColor, handleDragStart}
}