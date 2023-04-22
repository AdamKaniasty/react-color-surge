# react-color-surge

`react-color-surge` is a lightweight package that allows you to easily extract the dominant color from an image using a React hook.

## Installation

You can install the package using npm:
```jsx
npm install react-color-surge 
```

## Usage

### Color function

The `Color` function takes two parameters:

- `[...img]`: a set of normal `img` tag parameters (such as `src`, `alt`, etc.).
- `hook`: a React hook function that will be used to retrieve the dominant color from the passed image.

Here's an example usage of the `Color` function:

```jsx
import { Color } from 'react-color-surge/dist/index';

function App() {
  const [color, setColor] = useState('#FFFFFF');

  return (
    <div>
      <Color
        src ={require('/path/to/image.jpg')) alt: 'Example image',
        hook={setColor}
      />
      <div style={{ backgroundColor: color }}>
        This is an example div with the extracted dominant color.
      </div>
    </div>
  );
}
