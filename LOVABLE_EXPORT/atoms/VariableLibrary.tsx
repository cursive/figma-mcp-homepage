import React from 'react';
import './VariableLibrary.css';

const VariableLibrary: React.FC = () => {
  return (
    <div className="variable-library">
      {/* Color System */}
      <section className="variable-section">
        <h3 className="section-title">Color System</h3>
        <div className="color-grid">
          <div className="color-item">
            <div className="color-swatch" style={{ backgroundColor: '#141414' }}></div>
            <div className="color-info">
              <span className="color-name">Primary Black</span>
              <span className="color-value">#141414</span>
            </div>
          </div>
          <div className="color-item">
            <div className="color-swatch" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
            <div className="color-info">
              <span className="color-name">Secondary Black</span>
              <span className="color-value">rgba(0, 0, 0, 0.6)</span>
            </div>
          </div>
          <div className="color-item">
            <div className="color-swatch" style={{ backgroundColor: '#ffffff' }}></div>
            <div className="color-info">
              <span className="color-name">Primary White</span>
              <span className="color-value">#ffffff</span>
            </div>
          </div>
          <div className="color-item">
            <div className="color-swatch" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}></div>
            <div className="color-info">
              <span className="color-name">Secondary White</span>
              <span className="color-value">rgba(255, 255, 255, 0.8)</span>
            </div>
          </div>
          <div className="color-item">
            <div className="color-swatch" style={{ backgroundColor: '#f5f5f5' }}></div>
            <div className="color-info">
              <span className="color-name">Background Secondary</span>
              <span className="color-value">#f5f5f5</span>
            </div>
          </div>
          <div className="color-item">
            <div className="color-swatch" style={{ backgroundColor: '#e6e6e6' }}></div>
            <div className="color-info">
              <span className="color-name">Border Light</span>
              <span className="color-value">#e6e6e6</span>
            </div>
          </div>
          <div className="color-item">
            <div className="color-swatch" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}></div>
            <div className="color-info">
              <span className="color-name">Overlay Light</span>
              <span className="color-value">rgba(0, 0, 0, 0.1)</span>
            </div>
          </div>
          <div className="color-item">
            <div className="color-swatch" style={{ backgroundColor: 'rgba(20, 20, 20, 0.2)' }}></div>
            <div className="color-info">
              <span className="color-name">Overlay Medium</span>
              <span className="color-value">rgba(20, 20, 20, 0.2)</span>
            </div>
          </div>
          <div className="color-item">
            <div className="color-swatch" style={{ backgroundColor: '#f08e80' }}></div>
            <div className="color-info">
              <span className="color-name">Accent Coral</span>
              <span className="color-value">#f08e80</span>
            </div>
          </div>
          <div className="color-item">
            <div className="color-swatch" style={{ backgroundColor: '#34484c' }}></div>
            <div className="color-info">
              <span className="color-name">Neutral Dark</span>
              <span className="color-value">#34484c</span>
            </div>
          </div>
          <div className="color-item">
            <div className="color-swatch" style={{ backgroundColor: '#07a023' }}></div>
            <div className="color-info">
              <span className="color-name">Success Green</span>
              <span className="color-value">#07a023</span>
            </div>
          </div>
          <div className="color-item">
            <div className="color-swatch" style={{ backgroundColor: '#d6b707' }}></div>
            <div className="color-info">
              <span className="color-name">Warning Yellow</span>
              <span className="color-value">#d6b707</span>
            </div>
          </div>
          <div className="color-item">
            <div className="color-swatch" style={{ backgroundColor: '#b51010' }}></div>
            <div className="color-info">
              <span className="color-name">Error Red</span>
              <span className="color-value">#b51010</span>
            </div>
          </div>
          <div className="color-item">
            <div className="color-swatch" style={{ backgroundColor: '#ffbf00' }}></div>
            <div className="color-info">
              <span className="color-name">Accent Gold</span>
              <span className="color-value">#ffbf00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing System */}
      <section className="variable-section">
        <h3 className="section-title">Spacing System</h3>
        <div className="spacing-grid">
          <div className="spacing-item">
            <div className="spacing-visual" style={{ height: '4px' }}></div>
            <div className="spacing-info">
              <span className="spacing-name">Line Spacing</span>
              <span className="spacing-value">4px</span>
            </div>
          </div>
          <div className="spacing-item">
            <div className="spacing-visual" style={{ height: '8px' }}></div>
            <div className="spacing-info">
              <span className="spacing-name">Icon Gap</span>
              <span className="spacing-value">8px</span>
            </div>
          </div>
          <div className="spacing-item">
            <div className="spacing-visual" style={{ height: '8px' }}></div>
            <div className="spacing-info">
              <span className="spacing-name">Item Spacing</span>
              <span className="spacing-value">8px</span>
            </div>
          </div>
          <div className="spacing-item">
            <div className="spacing-visual" style={{ height: '16px' }}></div>
            <div className="spacing-info">
              <span className="spacing-name">Group Spacing</span>
              <span className="spacing-value">16px</span>
            </div>
          </div>
          <div className="spacing-item">
            <div className="spacing-visual" style={{ height: '20px' }}></div>
            <div className="spacing-info">
              <span className="spacing-name">Side Spacing</span>
              <span className="spacing-value">20px</span>
            </div>
          </div>
          <div className="spacing-item">
            <div className="spacing-visual" style={{ height: '24px' }}></div>
            <div className="spacing-info">
              <span className="spacing-name">Section Spacing</span>
              <span className="spacing-value">24px</span>
            </div>
          </div>
        </div>
      </section>

      {/* Typography System */}
      <section className="variable-section">
        <h3 className="section-title">Typography System</h3>
        <div className="typography-grid">
          <div className="typography-item">
            <div className="typography-sample typography-h1">Heading 1</div>
            <div className="typography-info">
              <span className="typography-name">H1 - SemiBold</span>
              <span className="typography-value">32px / 38px</span>
            </div>
          </div>
          <div className="typography-item">
            <div className="typography-sample typography-h2">Heading 2</div>
            <div className="typography-info">
              <span className="typography-name">H2 - SemiBold</span>
              <span className="typography-value">24px / 32px</span>
            </div>
          </div>
          <div className="typography-item">
            <div className="typography-sample typography-h3">Heading 3</div>
            <div className="typography-info">
              <span className="typography-name">H3 - SemiBold</span>
              <span className="typography-value">21px / 28px</span>
            </div>
          </div>
          <div className="typography-item">
            <div className="typography-sample typography-h4">Heading 4</div>
            <div className="typography-info">
              <span className="typography-name">H4 - SemiBold</span>
              <span className="typography-value">16px / 16px</span>
            </div>
          </div>
          <div className="typography-item">
            <div className="typography-sample typography-body">Body Text</div>
            <div className="typography-info">
              <span className="typography-name">Body - Regular</span>
              <span className="typography-value">16px / 22px</span>
            </div>
          </div>
          <div className="typography-item">
            <div className="typography-sample typography-body-s">Small Text</div>
            <div className="typography-info">
              <span className="typography-name">Body S - Regular</span>
              <span className="typography-value">14px / 18px</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VariableLibrary;
