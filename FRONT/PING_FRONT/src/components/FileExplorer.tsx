// src/components/FileExplorer.tsx

import React from 'react';

const FileExplorer: React.FC = () => {
  return (
    <div className="file-explorer">
      <ul>
        <li>RoastingPython
          <ul>
            <li> <img src="icon.png" alt="icon"/> CantCme.c</li>
            <li> <img src="icon.png" alt="icon"/> icantC.py</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default FileExplorer;
