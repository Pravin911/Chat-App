function GenderCheckBox() {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-slate-300">Male</span>
          <input type="checkbox" name="gender" className="checkbox border-slate-500" value="male" />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-slate-300">Female</span>
          <input type="checkbox" name="gender" className="checkbox border-slate-500" value="male" />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox;
