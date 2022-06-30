export enum Icons {
  GITHUB = 'github',
  TWITTER = 'twitter',
}

const icons = {
  github: (
    <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
  ),
  twitter: (
    <>
      <rect fill="none" width="24" height="24" />
      <path
        d="M21.53,6A9.86,9.86,0,0,0,24,3.43h0a10.41,10.41,0,0,1-2.83.78,4.92,4.92,0,0,0,2.16-2.72,9.66,9.66,0,0,1-3.12,1.19A4.92,4.92,0,0,0,11.7,6.05a5.13,5.13,0,0,0,.11,1.12A13.91,13.91,0,0,1,1.67,2,5,5,0,0,0,1,4.51,4.93,4.93,0,0,0,3.18,8.6,4.94,4.94,0,0,1,1,8v.06A4.94,4.94,0,0,0,4.9,12.88,4.85,4.85,0,0,1,3.61,13,4.8,4.8,0,0,1,2.68,13a5,5,0,0,0,4.6,3.43,9.89,9.89,0,0,1-6.1,2.09A9.14,9.14,0,0,1,0,18.42a13.9,13.9,0,0,0,7.55,2.21A13.91,13.91,0,0,0,21.53,6Z"
        transform="translate(0 1.12)"
      />
    </>
  ),
};

type Props = {
  icon: Icons;
  alt?: string;
};

const Icon = ({ icon, alt }: Props) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="currentColor"
    focusable="false"
  >
    {alt && <title>{alt}</title>}
    {icons[icon]}
  </svg>
);

export default Icon;
