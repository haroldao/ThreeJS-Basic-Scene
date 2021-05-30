// Scene
const scene = new THREE.Scene();

// Blue Cube
const geometry =new THREE.BoxGeometry(1, 1, 1);
      material = new THREE.MeshBasicMaterial({color: 'blue'});
      mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);