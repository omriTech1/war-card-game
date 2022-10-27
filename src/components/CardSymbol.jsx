export const CardSymbol = ({ children, x, y, flipped}) => {
    return (
      <g>
        <text
          fill="currentColor"
          textAnchor="middle"
          transform-origin={`${x + 8} ${y + 8}`}
          transform={`${flipped ? "rotate(180)" : ""} translate(8 14)`}
          fontSize="16"
          x={x}
          y={y}
        >
          {children}
        </text>
      </g>
    );
  };