import { newSpecPage } from '@stencil/core/testing';
import { ModusProgressBar } from './modus-progress-bar';

describe('modus-progress-bar', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ModusProgressBar],
      html: '<modus-progress-bar></modus-progress-bar>',
    });
    expect(root).toEqualHtml(`
      <modus-progress-bar>
        <mock:shadow-root>
          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" class="default-background-color modus-progress-bar" role="progressbar">
            <div class="default-color default-text-color progress" style="width: 0%;">
            </div>
          </div>
        </mock:shadow-root>
      </modus-progress-bar>
    `);
  });

  it('should default to no display text', async () => {
    const modusProgress = new ModusProgressBar();
    expect(modusProgress.text).toBeFalsy();
  });

  it('should default to max value of 100', async () => {
    const modusProgress = new ModusProgressBar();
    expect(modusProgress.maxValue).toEqual(100);
  });

  it('should default to min value of 0', async () => {
    const modusProgress = new ModusProgressBar();
    expect(modusProgress.minValue).toEqual(0);
  });

  it('should default value to 0', async () => {
    const modusProgress = new ModusProgressBar();
    expect(modusProgress.value).toEqual(0);
  });
});
