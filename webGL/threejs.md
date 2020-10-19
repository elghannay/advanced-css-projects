#### what are geometries

Geometries are instances of THREE.Geometry that define the shape of an object in
a scene. They are made up of vertices and faces (which are themselves objects and
are accessible through the vertices and faces array properties). Vertices are the
THREE.Vector3 objects representing points in three-dimensional space, while faces
are the THREE.Face3 objects representing triangular surfaces. (All more complex
shapes are subdivided into triangular faces for rendering purposes.)

Luckily, dealing with vertices and faces directly is usually unnecessary because
THREE.Geometry has many subclasses that help create commonly used shapes.

[shape viewer](http://threejsplaygnd.brangerbriz.net/gui/)

#### materials 

Materials are instances of THREE.Material that define how objects appear. There are
several common material subclasses:

##### MeshBasicMaterial

>It is not affected by lighting (a characteristic called unlit), so this is usually used to display a solid color or a wireframe.

##### MeshNormalMaterial

> This material is unlit and useful for quickly distinguishing the shape of an object.

##### MeshPhongMaterial

> Faces are affected by lighting, and can be shiny. Specifically, lighting is calculated per-texel (texture pixel), so this will be more accurate than Lambert materials when the light source is close to the object in question. It will appear black if there are no lights in the scene.