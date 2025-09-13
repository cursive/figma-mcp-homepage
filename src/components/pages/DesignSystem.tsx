import React, { useState } from 'react';
import { Tile, PanelHeader } from '../molecules';
import { HeartIcon, StarIcon, ZoomInIcon, ZoomOutIcon } from '../icons';
import { VariableLibrary } from '../atoms';
import './DesignSystem.css';

const DesignSystem: React.FC = () => {
    // Tile component state
    const [tileStatus, setTileStatus] = useState<'default' | 'selected'>('default');
    const [tileShowIcon, setTileShowIcon] = useState(true);
    const [tileShowRightLabel, setTileShowRightLabel] = useState(false);
    const [tileShowPill, setTileShowPill] = useState(true);
    const [tileShowDescription, setTileShowDescription] = useState(true);
    const [tileShowRadio, setTileShowRadio] = useState(true);
    const [tileTitle, setTileTitle] = useState('Delivery');
    const [tileDescription, setTileDescription] = useState('$73');
    const [tileAdditionalPrice, setTileAdditionalPrice] = useState('+$15');

    // PanelHeader component state
    const [panelVariant, setPanelVariant] = useState<'primary' | 'secondary'>('primary');
    const [panelShowChevron, setPanelShowChevron] = useState(true);
    const [panelLabel, setPanelLabel] = useState("What you'll get");
    const [panelTitle, setPanelTitle] = useState("What you'll get");
    const [panelSubtitle, setPanelSubtitle] = useState("Sub");

    return (
        <div className="design-system">
            <div className="design-system-header">
                <h1>Design System Showcase</h1>
                <p>Interactive component library with live controls for variants and boolean toggles</p>
            </div>

            <div className="design-system-content">
                {/* Tile Component Showcase */}
                <section className="component-showcase">
                    <div className="component-header">
                        <h2>Tile Component</h2>
                        <p>Interactive tile with configurable variants and toggles</p>
                    </div>

                    <div className="component-demo">
                        <div className="component-preview">
                            <Tile
                                status={tileStatus}
                                showIcon={tileShowIcon}
                                showRightLabel={tileShowRightLabel}
                                showPill={tileShowPill}
                                showDescription={tileShowDescription}
                                showRadio={tileShowRadio}
                                title={tileTitle}
                                description={tileDescription}
                                additionalPrice={tileAdditionalPrice}
                                onClick={() => setTileStatus(tileStatus === 'default' ? 'selected' : 'default')}
                            />
                        </div>

                        <div className="component-controls">
                            <h3>Controls</h3>

                            <div className="control-group">
                                <h4>Variants</h4>
                                <div className="control-row">
                                    <label>
                                        <input
                                            type="radio"
                                            name="tileStatus"
                                            value="default"
                                            checked={tileStatus === 'default'}
                                            onChange={(e) => setTileStatus(e.target.value as 'default' | 'selected')}
                                        />
                                        Default
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="tileStatus"
                                            value="selected"
                                            checked={tileStatus === 'selected'}
                                            onChange={(e) => setTileStatus(e.target.value as 'default' | 'selected')}
                                        />
                                        Selected
                                    </label>
                                </div>
                            </div>

                            <div className="control-group">
                                <h4>Boolean Toggles</h4>
                                <div className="control-row">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={tileShowIcon}
                                            onChange={(e) => setTileShowIcon(e.target.checked)}
                                        />
                                        Show Icon
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={tileShowRightLabel}
                                            onChange={(e) => setTileShowRightLabel(e.target.checked)}
                                        />
                                        Show Right Label
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={tileShowPill}
                                            onChange={(e) => setTileShowPill(e.target.checked)}
                                        />
                                        Show Pill
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={tileShowDescription}
                                            onChange={(e) => setTileShowDescription(e.target.checked)}
                                        />
                                        Show Description
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={tileShowRadio}
                                            onChange={(e) => setTileShowRadio(e.target.checked)}
                                        />
                                        Show Radio
                                    </label>
                                </div>
                            </div>

                            <div className="control-group">
                                <h4>Text Content</h4>
                                <div className="control-row">
                                    <label>
                                        Title:
                                        <input
                                            type="text"
                                            value={tileTitle}
                                            onChange={(e) => setTileTitle(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Description:
                                        <input
                                            type="text"
                                            value={tileDescription}
                                            onChange={(e) => setTileDescription(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Additional Price:
                                        <input
                                            type="text"
                                            value={tileAdditionalPrice}
                                            onChange={(e) => setTileAdditionalPrice(e.target.value)}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PanelHeader Component Showcase */}
                <section className="component-showcase">
                    <div className="component-header">
                        <h2>PanelHeader Component</h2>
                        <p>Panel header with Primary and Secondary variants</p>
                    </div>

                    <div className="component-demo">
                        <div className="component-preview">
                            <PanelHeader
                                variant={panelVariant}
                                showChevron={panelShowChevron}
                                label={panelLabel}
                                title={panelTitle}
                                subtitle={panelSubtitle}
                            />
                        </div>

                        <div className="component-controls">
                            <h3>Controls</h3>

                            <div className="control-group">
                                <h4>Variants</h4>
                                <div className="control-row">
                                    <label>
                                        <input
                                            type="radio"
                                            name="panelVariant"
                                            value="primary"
                                            checked={panelVariant === 'primary'}
                                            onChange={(e) => setPanelVariant(e.target.value as 'primary' | 'secondary')}
                                        />
                                        Primary
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="panelVariant"
                                            value="secondary"
                                            checked={panelVariant === 'secondary'}
                                            onChange={(e) => setPanelVariant(e.target.value as 'primary' | 'secondary')}
                                        />
                                        Secondary
                                    </label>
                                </div>
                            </div>

                            <div className="control-group">
                                <h4>Boolean Toggles</h4>
                                <div className="control-row">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={panelShowChevron}
                                            onChange={(e) => setPanelShowChevron(e.target.checked)}
                                        />
                                        Show Chevron
                                    </label>
                                </div>
                            </div>

                            <div className="control-group">
                                <h4>Text Content</h4>
                                <div className="control-row">
                                    <label>
                                        Label:
                                        <input
                                            type="text"
                                            value={panelLabel}
                                            onChange={(e) => setPanelLabel(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Title:
                                        <input
                                            type="text"
                                            value={panelTitle}
                                            onChange={(e) => setPanelTitle(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Subtitle:
                                        <input
                                            type="text"
                                            value={panelSubtitle}
                                            onChange={(e) => setPanelSubtitle(e.target.value)}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Variable Library Showcase */}
                <section className="component-showcase">
                    <div className="component-header">
                        <h2>Variable Library</h2>
                        <p>Complete design system variables including colors, spacing, and typography</p>
                    </div>

                    <div className="variable-library-preview">
                        <VariableLibrary />
                    </div>
                </section>

                {/* Icons Showcase */}
                <section className="component-showcase">
                    <div className="component-header">
                        <h2>Icon Collection</h2>
                        <p>Available icons from the Lucida icon set</p>
                    </div>

                    <div className="icons-grid">
                        <div className="icon-item">
                            <HeartIcon size={32} />
                            <span>Heart</span>
                        </div>
                        <div className="icon-item">
                            <StarIcon size={32} />
                            <span>Star</span>
                        </div>
                        <div className="icon-item">
                            <ZoomInIcon size={32} />
                            <span>Zoom In</span>
                        </div>
                        <div className="icon-item">
                            <ZoomOutIcon size={32} />
                            <span>Zoom Out</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DesignSystem;
