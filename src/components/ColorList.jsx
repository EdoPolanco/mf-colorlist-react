import React from 'react'
import Swal from "sweetalert2"

const ColorList = ({colorList = [], handleDragStart, handleDeleteColor }) => {

  const handleCopyColor = (color) => {
    navigator.clipboard.writeText(color);

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: `Color: ${color} Copiado!`,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    })
  }
  
  return (
    <div className='list-group text-center'
         data-bs-toggle="tooltip" data-bs-placement="top"
         data-bs-title='Cuando tengas elementos los podras arrastrar a la seccion de "Preset" '
    >
      { colorList.length > 0 ? (
        colorList.map( (color, index) => 
          <div 
        className='list-group-item list-group-item-action'
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          cursor: 'pointer' 
        }}
      >
        <button 
          key={index} 
          type='button' 
          className='btn p-0'
          aria-current="true"
          title="Copy"
          style={{
            fontWeight: "bolder",
            color,
            cursor: 'pointer',
            flex: 1,
            textAlign: "left"
          }}
          draggable="true"
          onDragStart={() => handleDragStart(color)}
          onClick={() => handleCopyColor(color)}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{
              width: "20px",
              height: "20px",
              background: color,
              display: "inline-block",
              margin: "-3px 1rem",
              borderRadius: "100px",
            }}></span>
            {color}
          </div>
        </button>
        
        <button 
          type="button" 
          className="btn btn-link p-0"
          onClick={() => handleDeleteColor(color)}
          title="Eliminar"
        >
          <i className="bi bi-trash" style={{ color: 'red' }}></i>
        </button>
      </div>
      

          )) : (
          <div className="alert alert-danger mt-3" role='alert'>
            <b>Sin elementos</b>

          </div>
        )
       }

    </div>
  )
}

export default ColorList