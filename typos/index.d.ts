/**
 * @interface
 * */
export interface Window {
    powerManagement : PowerManagementInterface
}
/**
 * @interface
 */
export interface PowerManagementInterface {
    /**
     * @param {Function} success
     * @param {Function} failure
     * @param {boolean} runLockScreen
     * @return {void}
     */
    acquire (success?:Function, failure?:Function, runLockScreen?:boolean):void;
    /**
     *
     * @param success
     * @param failure
     * @return {void}
     */
    release (success:Function, failure:Function):void;
    /***
     *
     * @param enabled
     * @param success
     * @param failure
     * @return {void}
     */
    setReleaseOnPause (enabled, success:Function, failure:Function):void;
    /**
     *
     * @param success
     * @param failure
     * @return {void}
     */
    dim (success:Function, failure:Function):void;
}
/**
 *
 * */
export var powerManagement : PowerManagementInterface;
