import { baseUrl } from '@/App';
import BaseThirdParty from './BaseThirdParty';

const Others = () => {
    const othersUrl = `${baseUrl}/integration/third-parties/others`


    return (
        <BaseThirdParty
            thirdPartyUrl={othersUrl}
            queryKey={"others"}
            title={"Others"}
            buttonTitle={"Add Others"}
            dialogTitle={"Add Others 3rd Party"}
            editDialogTitle={"Edit Other"}
        />
    )
}

export default Others
