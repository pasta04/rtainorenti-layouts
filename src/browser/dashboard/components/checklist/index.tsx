import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, {ChangeEvent} from 'react';
import {Checklist as ChecklistType} from '../../../../nodecg/replicants';
import {makeStyles} from '@material-ui/core';

const checklistRep = nodecg.Replicant('checklist');

const useStyles = makeStyles({
	checklist: {
		padding: '16px',
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridTemplateRows: '1fr',
		gridGap: '8px',
		userSelect: 'none',
	},
});

export const Checklist: React.SFC = () => {
	const classes = useStyles({});
	const [checkList, setCheckList] = React.useState<ChecklistType>([]);
	/** チェックリストの変更を検知して更新 */
	const handler = (newVal: ChecklistType) => {
		// こっちだとチェックボックス押しても再レンダリングされない
		// setCheckList(newVal);
		// こっちはされる
		setCheckList(newVal.map((val) => val));
	};

	React.useEffect(() => {
		checklistRep.on('change', handler);
		return () => {
			checklistRep.removeListener('change', handler);
		};
	}, [checklistRep]);

	/** チェックボックス切り替え */
	const toggleCheckbox = (e: ChangeEvent<any>, checked: boolean) => {
		nodecg.sendMessage('toggleCheckbox', {
			name: e.target.name,
			checked,
		});
	};

	/** チェックリスト1個を生成 */
	const makeChecklistElement = (checklist: ChecklistType[0]) => (
		<FormControlLabel
			key={`${checklist.name}_${checklist.complete}`}
			control={
				<Checkbox checked={checklist.complete} name={checklist.name} />
			}
			label={checklist.name}
			onChange={toggleCheckbox}
			style={{
				margin: '0',
				borderRadius: '3px',
				border: '1px solid black',
			}}
		/>
	);

	return (
		<div className={classes.checklist}>
			{checkList.map((check) => makeChecklistElement(check))}
		</div>
	);
};
