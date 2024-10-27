import { baseUrl } from '@/App';
import BaseThirdParty from './BaseThirdParty';

const Regulators = () => {
    const regulatorUrl = `${baseUrl}/integration/third-parties/regulators`


    return (
        <BaseThirdParty
            thirdPartyUrl={regulatorUrl}
            queryKey={"regulator"}
            title={"Regulator"}
            buttonTitle={"Add Regulator"}
            dialogTitle={"Add New Regulator"}
            editDialogTitle={"Edit Regulator"}
        />
    )
}

export default Regulators
