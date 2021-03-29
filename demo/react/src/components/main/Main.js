import './Main.css';

const Main = () => {
  return (
    <div className="sdds-container-fluid content-wrapper">
      <div className="sdds-row">

        <div className="sdds-col-xlg-16 sdds-col-md-8 sdds-col-sm-4">
        <p className="lead-head sdds-paragraph-01">This is a simple example how to implement the SDDS components in Angular.</p>
        <p className="sub-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perspiciatis amet officiis voluptates id.</p>
        </div>

        <div className="section-wrapper sdds-col-xlg-8 sdds-col-md-4 sdds-col-sm-4">
          <h4>Components</h4>

          <div className="component-wrapper">
            <p className="sdds-headline-05">Accordion</p>
            <sdds-accordion>
              <sdds-accordion-item header="First item" affix="prefix" tabindex="1">
              This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. Lorem ipsum doler sit amet.
              </sdds-accordion-item>
              <sdds-accordion-item header="Second Item" affix="prefix" tabindex="2" expanded="true">
              This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header. Lorem ipsum doler sit amet.
              </sdds-accordion-item>
            </sdds-accordion>
          </div>

          <div className="component-wrapper">
            <p className="sdds-headline-05">Breadcrumb</p>
            <div className="sdds-breadcrumb">
              <div className="sdds-breadcrumb-item">
                <a href="#">Page 1</a>
              </div>
              <div className="sdds-breadcrumb-item">
                <a href="#">Page 2</a>
              </div>
              <div className="sdds-breadcrumb-item sdds-breadcrumb-item-current">
                <a aria-current="page">Page 3</a>
              </div>
            </div>
          </div>

          <div className="component-wrapper">
            <p className="sdds-headline-05">Button</p>
            <sdds-button type="primary" text="Button"></sdds-button>
          </div>

          <div className="component-wrapper">
            <p className="sdds-headline-05">Card</p>
            <div className="sdds-card ">

              <div className="sdds-card-header">
                <h6 className="sdds-card-headline">Header text</h6>
                <h6 className="sdds-card-sub-headline">Subheader text</h6>
              </div>

              <div className="sdds-card-body">This is a short and consist detail text describing for the user what this text is really about.</div>

              <div className="sdds-card-footer"><c-icon style={{fontSize: "20px"}} name="scania-arrow"></c-icon></div>
            </div>
          </div>

          {/* <div className="component-wrapper">
            <p className="sdds-headline-05">Checkbox</p>
            <div className="sdds-checkbox-item">
              <input className="sdds-form-input" type="checkbox" name="cb-example" id="cb-option-1" checked="checked">
                <label className="sdds-form-label" for="cb-option-1">
                  Label Text 1
                </label>
              </input>
            </div>
            <div className="sdds-checkbox-item">
              <input className="sdds-form-input" type="checkbox" name="cb-example" id="cb-option-2">
                <label className="sdds-form-label" for="cb-option-2">
                  Label Text 2
                </label>
              </input>
            </div>
            <div className="sdds-checkbox-item">
              <input className="sdds-form-input" type="checkbox" name="cb-example" id="cb-option-3" checked="checked" disabled>
                <label className="sdds-form-label" for="cb-option-3">
                  Label Text 3
                </label>
              </input>
            </div>
          </div>

          <div className="component-wrapper">
            <p className="sdds-headline-05">Divider</p>
            Dark
            <div className="sdds-divider-dark" style="margin: 5px; width: 400px;"></div>

            Coloured
            <div className="sdds-divider-coloured" style="margin: 5px; width: 400px;" ></div>

            Light
            <div className="sdds-divider-light"style="margin: 5px;  width: 400px;" ></div>
          </div>

          <div className="component-wrapper">
            <p className="sdds-headline-05">Dropdown</p>
            <sdds-dropdown placeholder="Select option">
              <sdds-dropdown-option value="option-1">Option 1</sdds-dropdown-option>
              <sdds-dropdown-option value="option-2">Option 2</sdds-dropdown-option>
              <sdds-dropdown-option value="option-3">Option 3</sdds-dropdown-option>
            </sdds-dropdown>
          </div>

          <div className="component-wrapper">
            <p className="sdds-headline-05">Link</p>
            This is an example of <a href="#">a link</a> inside a paragraph.
            This is an example of <a className="disabled" href="#">a link</a> inside a paragraph.
          </div>

          <div className="component-wrapper">
            <p className="sdds-headline-05">Radio button</p>
            <div className="sdds-radio-button-group">
              <div className="sdds-radio-item">
                <input className="sdds-form-input" type="radio" name="rb-example" id="rb-option-1">
                  <label className="sdds-form-label" for="rb-option-1">
                    Label Text 1
                  </label>
                </input>
              </div>
              <div className="sdds-radio-item">
                <input className="sdds-form-input" type="radio" name="rb-example" id="rb-option-2">
                  <label className="sdds-form-label" for="rb-option-2">
                    Label Text 2
                  </label>
                </input>
              </div>
              <div className="sdds-radio-item">
                <input className="sdds-form-input" type="radio" name="rb-example-disabled" id="rb-option-3" checked="checked" disabled>
                  <label className="sdds-form-label" for="rb-option-3">
                    Label Text 3
                  </label>
                </input>
              </div>
            </div>
          </div>

          <div className="component-wrapper">
            <p className="sdds-headline-05">Textfield</p>
            <div style="width:208px">
              <sdds-textfield type="text" placeholder="Placeholder" labelinside="Label text" ></sdds-textfield>
            </div>
          </div>

          <div className="component-wrapper">
            <p className="sdds-headline-05">Toggle</p>
            <div className="sdds-toggle" tabindex="0">
              <input type="checkbox" className="sdds-toggle-input" id="customSwitch1">
                <span className="sdds-toggle-switch"></span>
                <label className="sdds-toggle-label" for="customSwitch1">Toggle this switch element</label>
              </input>
            </div>
          </div>

          <div className="component-wrapper">
            <p className="sdds-headline-05">Tooltip</p>
              <sdds-tooltip placement="right" selector="#right-1" text="Tooltip"></sdds-tooltip>
              <button className="sdds-btn sdds-btn-primary" id="right-1">Button</button>
          </div> */}


        </div>
      </div>
    </div>
  );
}

export default Main;