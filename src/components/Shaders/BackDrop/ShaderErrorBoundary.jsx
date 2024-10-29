import React from "react";

export class ShaderErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Shader Error:", error);
    console.error("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <mesh position={[0, 0, -1]}>
          <planeGeometry args={[2, 2]} />
          <meshBasicMaterial color="purple" opacity={0.5} transparent />
        </mesh>
      );
    }

    return this.props.children;
  }
}
