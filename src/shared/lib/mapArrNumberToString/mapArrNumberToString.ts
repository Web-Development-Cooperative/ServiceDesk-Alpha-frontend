const mapArrNumberToString = (arr: number[]) => {
	const res: string[] = arr.filter(Number).map((elem) => elem.toString());

	return res;
};

export { mapArrNumberToString };
