# Vitest react testing setup

https://www.robinwieruch.de/vitest-react-testing-library/ good setup tutorial but does not have @testing-library/user-event

For DOM queries its better to use queries by role because this way it is 100% available to all users (exists in the accessibility tree). If can't use role - use text, labels, last resort - test ids.

user-event is better than just firing browser events because they actually simulate an interaction

Snapshots and snapshot tools allow to prevent regression and help minimize test like 'header exists', but they are not a replacement of traditional tests since they only check if something changed, not if something is working correctly. When a change is intentional, you can update the snapshot to match it.
