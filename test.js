import test from 'ava';
import m from './';

test(async t => {
	if (process.env.CI) {
		t.pass();
		return;
	}

	const res = await m();

	t.truthy(res.name);
	t.truthy(res.id);
});
