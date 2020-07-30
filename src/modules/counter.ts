// 액션 타입을 선언합니다
// 뒤에 as const를 붙여줌으로써 나중에 액션 객체를 만들게 action.type의 값을 추론하는 과정에서
// action.type이 string으로 추론되지 않고 'counter/INCREASE'와 같이 실제 문자열 값으로 추론되도록 해줍니다.

const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// 액션 생성함수를 선언합니다
export const increase = () => ({
	type: INCREASE,
});

export const decrease = () => ({
	type: DECREASE,
});

export const increaseBy = (diff: number) => ({
	type: INCREASE_BY,
	// 액션에 부가적으로 필요한 값을 payload라는 이름으로 통일합니다
	// 이는 FSA 라는 규칙인데
	// 이 규칙을 적용하면 액션들이 모두 비슷한 구조로 이루어져있게 되어 추후 다룰 때도 편하고
	// 읽기 쉽고, 액션 구조를 일반화함으로써 액션에 관련된 라이브러리를 사용 할 수 있게 해줍니다.
	// 다만, 무조건 꼭 다를 필요는 없습니다.abs
	payload: diff,
});

// 모든 액션 객체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____>는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 때 as const를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type CounterAction =
	| ReturnType<typeof increase>
	| ReturnType<typeof decrease>
	| ReturnType<typeof increaseBy>;

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다
